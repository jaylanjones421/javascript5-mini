import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res.data)
      this.setState({
        cars: res.data
      }
      )
    })
  }
  
  render() {
    const list = this.state.cars.map((car,i)=>{
      return(
        <div>
          <hr/>
            <p>{car.id}</p>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.color}</p>
            <p>{car.price}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {list}
      </div>
    );
  }
}

export default App;