import './Card.css';

import { useState } from 'react';

import { data } from '../../utils/data';
import CardItem from '../CardItem/CardItem';

const Card = () => {
  const [price, setPrice] = useState({}); // State for managing the Accumulated Price of Top level Card Items

  const total = Object.values(price).reduce((total, current) => total + current, 0); // Total Price for the Card

  return (
    <div className="card">
      <div className="card__container">
        <h4>
          <b>Subscription Preferences</b>
        </h4>
        <hr />
        <ul>
          {data.map((item) => (
            <CardItem key={item.id} item={item} addSubTotal={setPrice} /> // Top-level Card Items
          ))}
        </ul>
      </div>
      <div className="footer">
        <hr />
        <div className="footer__container">
          <p>Total: ${total} / mo</p>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
