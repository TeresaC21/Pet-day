import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // Date actually Footer
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <h2>Hola mundo con react</h2>
      <Header 
        title="Tienda virtual"
      />

      <Footer 
      date={date}
      />
    </Fragment>
  );
}

export default App;
