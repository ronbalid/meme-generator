import React from 'react';
import TrollFace from '../assets/troll-face.png';
import '../Styles/header.css';

export default function Header() {
  return (
    <header>
      <img src={TrollFace} alt="troll face" />
      <h3>Meme Generator</h3>
      <h5>React Course - Project 3</h5>
    </header>
  )
}