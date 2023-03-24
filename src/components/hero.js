import React from 'react';
import heroimg from './../img/Grou-77.png';

export default function Hero() {
  return (
    <section className="hero_container">
      <img src={heroimg} alt="hero image" className="hero_img" />
      <h1 className="hero_title">Online Experiences</h1>
      <p className="hero_paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
