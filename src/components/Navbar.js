import React from 'react';

const Navbar = (props) => {

  return (
    <div className="nav">
      <div className="nav-row">
        <button onClick={()=> props.showThis("show-everything")}>
          <h4 className={props.state === "show-everything" ? 'active' : 'grey'}>Everything</h4>
        </button>
        <button onClick={()=> props.showThis("show-images")}>
          <h4 className={props.state === "show-images" ? 'active' : 'grey'}>Images</h4>
        </button>
        <button onClick={()=> props.showThis("filter")}>
          <h4 className={props.state === "filter" ? 'active' : 'grey'}>Filter</h4>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
