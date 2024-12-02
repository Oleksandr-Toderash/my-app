import React, { Component } from 'react';
import { Header } from './components/jsx/Header.js';

// css
import './components/css/general.css';

export class Root extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
