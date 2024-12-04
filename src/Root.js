import React, { Component } from 'react';
import { Header } from './components/jsx/Header.js';
import { Description } from './components/jsx/Description.js';
import { Searchbar } from './components/jsx/Searchbar.js';
import { Cards } from './components/jsx/Cards.js';

// css
import './components/css/general.css';

export class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
        <Searchbar />
        <Cards />
      </div>
    );
  }
}
