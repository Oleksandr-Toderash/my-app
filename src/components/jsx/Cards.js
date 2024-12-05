import React, { Component } from 'react';
import '../css/card.css'

export class Cards extends Component {
  constructor(props) {
    super(props)
    this.props = {
      countryCoffee: '',
      priceCoffee: ''
    }
  }
  render() {
    const { countryCoffee, priceCoffee } = this.props;
    return (
      <div className="card-container">
        <div className='card__title'>
          <img src="https://s3-alpha-sig.figma.com/img/fab6/a1ff/d821960801d00e7476bcc3d424ae62de?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ElYCFrbpYVTtsd7fjJk2KrmgNfZ6~d4fKhXIMxIBiKOBdzrQA8vf7yPX0H8-VMS57MhvZLNW2Kj-oBTT8g4zCjzkqm2SGcZCJ89kfyyw3Yqk-7a1fzKHudfnpIC8cr25xl70xszp9Me8tZk0AcJHeG4aAZpUQw0c5p3H4sT3vHtpBhBBCY0GqtJ8jdWjxfK49eAThL4dXvpLRoMC5sBh6eBsT--KXgUtSNwraQUlFBJUdq~Nt9Wbf29rSO1JPs9HhPvEi1SKxsgkylqbN3PCO0YoRLk~yuBuM0~046oCEXzK71b6qcTGAUVmOXe5vtacG5obO4qII6JK5xw7ecCQTA__" alt="coffee-packs" />
        </div>
        <div className='card__description'>
          <h1>AROMISTICO Coffee 1 kg</h1>
          <p className='card__country'>{countryCoffee}</p>
          <p className='card__price'>{priceCoffee + '$'}</p>
        </div>
      </div>
    );
  }
}
