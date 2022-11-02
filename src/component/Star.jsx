import React, { useState } from 'react';

const Star = (props) => {
//  const { idx } = props
  
  //const [fillColor, changeFillColor] = useState("#000000")
  
  //const handleClick = () => {
   // console.log(idx)
    //changeFillColor('#FFA91B')
  // }

  
    return (
        <label className="star" onClick={props.onClick}>
            <svg 
                width="58" 
                height="58" 
                viewBox="0 0 24 24" 
                fill={props.fill}
                stroke="#393939" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        </label>
    );
}

export default Star;