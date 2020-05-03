import React from 'react';
import data from '../Data';

const ShowImages = () => {

  return (
    <div className="section show-images">
      {
        data.map((item, i) => (
          <div key={`${i}-showimages`} className="image-grid">
            <div className="date">{item.date}</div>
            <img src={item.img} alt={`art-${i}`}/>
          </div>
        ))
      }
    </div>
  );
}

export default ShowImages;
