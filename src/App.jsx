import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  console.log("Token retrieved from localStorage:", token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="header">
      <Header />
      <Nav />
      </div>
      <main>
        <section id="hello">
          <h2>Cassidy Kovell</h2>
          <p id="title">Full Stack Web Developer.</p>
        </section>
        <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
};

export default App;