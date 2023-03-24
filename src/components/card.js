import React from 'react';
import people from './../img/image-12.png';
import starimg from './../img/Star.png';

export default function Card() {
  return (
    <div className="card_container">
      <img src={people} alt="card image" className="card_img" />
      <div className="card_info">
        <img src={starimg} alt="star" className="star_img" />
        <span className="info_year gray">(6)</span>
        <span className="info_country gray">*USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="info_price bold">From $136 </span>/ person
      </p>
    </div>
  );
}
