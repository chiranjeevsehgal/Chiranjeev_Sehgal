import React from 'react';
import '../styles/overlay.css'

const Overlay = ({ show, onClick }) => {
  return show ? <div className="overlay" onClick={onClick} /> : null;
};

export default Overlay;