import React from 'react';
import Header from '~/components/Header';
import './styles.css';
import Card from '~/components/Card';
import Dashboard from '~/components/Dashboard';
import Footer from '~/components/Footer';

function Main() {
  return (
    <>
      <Header />
      <Dashboard />
      <Card />
      <Footer />
    </>
  );
}

export default Main;
