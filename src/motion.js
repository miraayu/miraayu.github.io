import React from 'react';
import './motion.css';
import ReactPlayer from "react-player";
 
function CardMotion() {
  return (
    <div  className='card'>
      <ReactPlayer className='video'
        url="https://youtu.be/ap734pVJAEA"
        />
        <span className='atext'>A Motion Graphics Video Sample</span>
    </div>
  );
}
 
export default CardMotion;