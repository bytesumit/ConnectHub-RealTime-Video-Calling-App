import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">

         <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
         <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
        

        </div>

        {/* Other Columns */}
        <div className="col-md-4 mb-4">
        <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
         <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
         
        </div>
        <div className="col-md-4 mb-4">
        <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
        <Card Title = "Getting Started" image = "GettingStarted.svg" Des = "dhqdhchsdcjhdsch sdcsdhc9ucodicjds98c chyusdc98sdjhjcisdhc sdchysdcisdhc8hu" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
