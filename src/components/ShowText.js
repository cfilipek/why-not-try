import React from 'react';
import data from '../Data';

class ShowText extends React.Component {

  state = {
    display: null,
  }

  render ()
  {
    return (
      <div className="section show-text">
        <div>
          {
            data.map((item, i) => (
              <div key={`${i}-showtext`}>
                <button onClick={()=> this.setState({display:item.date})} className="date">{item.date}</button>
              </div>
            ))
          }
        </div>
        {data.map((item, i) => {
          if (item.date === this.state.display) {
            return (
              <div className="min-content">
                <img src={item.img} alt={`img no.${i}`}/>
                <h6>{item.text}</h6>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default ShowText;
