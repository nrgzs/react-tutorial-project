import React from 'react';
import starimg from './../img/Star.png';

export default function Card(props) {
  let badgeText;
  if (props.user.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.user.location === 'online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card_container">
      {badgeText && <div className="card_badge">{badgeText}</div>}
      <img
        src={require(`../img/${props.user.coverImg}`)}
        alt="card image"
        className="card_img"
      />
      <div className="card_info">
        <img src={starimg} alt="star" className="star_img" />
        <span>{props.user.rating}</span>
        <span className="info_year gray">
          {' '}
          ({props.user.stats.reviewCount})
        </span>
        <span className="info_country gray"> {props.user.stats.location}</span>
      </div>
      <p>{props.user.title}</p>
      <p>
        <span className="info_price bold">From ${props.user.price}</span>/
        person
      </p>
    </div>
  );
}
