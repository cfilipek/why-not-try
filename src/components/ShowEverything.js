import React from 'react';
import data from '../Data';

const ShowEverything = () => {

  return (
    <div className="section show-everything">
      {
        data.map((item, i) => (
          <div key={`${i}-showall`}>
            <div className="date">{item.date}</div>
            <div className="content">
              <img src={item.img} alt={`art-${i}`}/>
              <h5 className="content-text">{item.text}</h5>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ShowEverything;
