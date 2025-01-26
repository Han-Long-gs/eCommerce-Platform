import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {
    const thresholds = [1, 2, 3, 4, 5];

  return (
    <div>
        {thresholds.map((threshold) => (
            <span key={threshold}>
                {value >= threshold ? <FaStar /> : value >= threshold - 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>))}
        <span className='rating-text'>{text && text}</span>
    </div>
  )
}



export default Rating