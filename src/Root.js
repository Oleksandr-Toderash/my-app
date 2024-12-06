import React, { Component } from 'react';
import { Header } from './components/jsx/Header.js';
import { Description } from './components/jsx/Description.js';
import { Searchbar } from './components/jsx/Searchbar.js';
import { Cards } from './components/jsx/Cards.js';
import { Footer } from './components/jsx/Footer.js';

// css
import './components/css/general.css';

export class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
        <Searchbar />
        <div className="card-box">
          <div className='grid-card-container'>
            <Cards countryCoffee='Brazil' priceCoffee='6.99' />
            <Cards countryCoffee='Kenya' priceCoffee='6.99' />
            <Cards countryCoffee='Columbia' priceCoffee='6.99' />
            <Cards countryCoffee='Brazil' priceCoffee='6.99' />
            <Cards countryCoffee='Brazil' priceCoffee='6.99' />
            <Cards countryCoffee='Brazil' priceCoffee='6.99' />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
