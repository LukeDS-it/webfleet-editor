import React from 'react';
import loading from 'assets/loading.png';
import reasons from 'assets/loading-reasons.json';
import './LoadingScreen.scss';

export function LoadingScreen() {
  return (
    <div className={'loading-screen'}>
      <img src={loading} alt='Loading spinner'/>
      {reasons[Math.floor(Math.random() * reasons.length)]}
    </div>
  );
}