import React, { useState, useRef, useEffect } from 'react';
import Star from './Star';

const RatingStars = () => {
    const [fillSiblings, setFillSiblings] = useState(0)
    
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const sendIdx = (idx) => {
      
    }

  const handleClick = idx => {
    console.log(idx, fillSiblings);
    setFillSiblings(idx)
  }
  
    /**
     * Fill the star with this color - #FFA91B
     */


    /**
     * Develop a custom hover handler to fill the color on hover
     */
  
  

    /**
     * Update the state when the star is clicked
     */

    /**
     * Reset Functionality
     */

    return (
        <div className="container">
            <h1 className="result"> You didn\'t review yet'</h1>
            <div className="stars">
              {GRADES.map((star, index) => 
            <Star key={index} 
              onClick={() => handleClick(index+1) }              
              fill = {index >= fillSiblings ? '#00000' : '#FFA91B'}
              sendIdx={sendIdx}/>)}
            </div>
        </div>
    );
}

export default RatingStars;