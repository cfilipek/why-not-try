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
              <div>
                <h5 className="content-text"><b>Entry:</b></h5>
                <h5 className="content-text">{item.text}</h5>
                <h5 className="content-text"><b>Worked On:</b></h5>
                {
                item.workedOn.map((work, i) =>(
                <div className="content-text" key={`${i}-workedon`}>
                  {work}
                </div>))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ShowEverything;
