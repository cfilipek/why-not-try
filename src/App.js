import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShowEverything from './components/ShowEverything';
import ShowImages from './components/ShowImages';
import ShowText from './components/ShowText';

class App extends React.Component {

  state = {
    show: 'show-everything',
  }

  showThis = (value) => {
   this.setState({
      show: value
    })
  }

 showWhat = (value) => {
    if (value === "show-everything"){
      return (
        <ShowEverything/>
      )
    }

    else if (value === "show-images"){
      return (
        <ShowImages/>
      )
    }

    else if (value === "filter"){
      return (
        <ShowText/>
      )
    }
  }

  render (){

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Why not try
          </h1>
        </header>
        <Navbar state={this.state.show} showThis={this.showThis}/>
        {this.showWhat(this.state.show)}
      </div>
    )
  }
}

export default App;
