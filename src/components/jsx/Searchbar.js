import React, { Component } from 'react';

// css
import '../css/searchbar.css'

export class Searchbar extends Component {
  render() {
    return (
      <div className='searchbar__container'>
        <div className='searchbar__content'>
          <div className="searchbar__input">
            <p>Lookiing for</p>
            <input type="text" placeholder='start typing here...' />
          </div>
          <div className="searchbar__option">
            <p>Or filter</p>
            <div className="searchbar__option-btn-container">
              <button className=' searchbar-btn-corner1'>Brazil</button>
              <button>Kenya</button>
              <button className=' searchbar-btn-corner2'>Columbia</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}