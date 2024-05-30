import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
        <div className="homepage-container">
      <h1>Welcome to Learning Platform!</h1>
      <p>Choose the activities by clicking the buttons !!!.</p>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
      <Link to="/dragdrop">
        <button>Start Drag Drop Game</button>
      </Link>
      <Link to="/matching">
        <button>Start matching</button>
      </Link>
    </div>
  );
};

export default HomePage;
