import React from 'react';

import Card from './Card';

const Cards =(props) => {
  return (
    <div className="cards container">
      <div className="row">
        <div className="col-sm-4">
          <Card title="card1" 
                description="description1" 
                link="http://www.test.com" />
        </div>
        <div className="col-sm-4">
          <Card title="card2" 
                description="description2" 
                link="http://www.test2.com" />
        </div>
        <div className="col-sm-4">
          <Card title="card3" 
                description="description2"
                link="http://www.test3.com" />
        </div>
      </div>
    </div>
  );
}

export default Cards;