import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Correio from '~/components/Correio';
import './styles.css';

function Secondary() {
  return (
    <>
      <Header />
      <Correio />
      <Footer />
    </>
  );
}
export default Secondary;
