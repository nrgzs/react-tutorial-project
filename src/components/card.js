import React from 'react';
import starimg from './../img/Star.png';

export default function Card(props) {
  return (
    <div className="card_container">
      <img
        src={require(`../img/${props.img}`)}
        alt="card image"
        className="card_img"
      />
      <div className="card_info">
        <img src={starimg} alt="star" className="star_img" />
        <span>{props.rating}</span>
        <span className="info_year gray"> ({props.reviewCount})</span>
        <span className="info_country gray"> {props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="info_price bold">From ${props.price}</span>/ person
      </p>
    </div>
  );
}
