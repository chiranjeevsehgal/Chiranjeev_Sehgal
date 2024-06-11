import React, { useState, useEffect } from 'react';
import '../styles/rating.css'

const Rating = () => {
  const [showCard, setShowCard] = useState(true);
  const [rating, setRating] = useState(0);
  const [showThanks, setShowThanks] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setShowThanks(true);

    const timer = setTimeout(() => {
        setShowCard(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  const handleClose = () => {
    setShowCard(false);
    setRating(0);
    setShowThanks(false);
  };


  return (
    <>
      <div className="overlay" style={{ display: showCard ? 'block' : 'none' }}>
        <div className="card-container">
          <div className="card">
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
            {!showThanks ? (
              <div>
                <h3>Rate Us</h3>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${rating >= i + 1 ? 'filled' : ''}`}
                      onClick={() => handleRating(i + 1)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                {rating > 0 && (
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            ) : (
              <div>
                <h3>Thank You!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;