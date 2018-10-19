import React, { Component } from 'react';

import './App.css';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme
  
} from "victory";
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Is Austin, Texas a Safe City?</h1>
      <p>Murders per year</p>
  <VictoryChart className='victory'
      
     
      height={200}
      domainPadding={{ x : [20, 20] }}>
  <VictoryLine
  style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc"}
  }}
        data={[
          { x: "2014", y: 37 },
          { x: "2015", y: 33 },
          { x: "2016", y: 42 },
          { x: "2017", y: 20 },
        ]}
      />
        
    </VictoryChart>
     
    </div>
    );
  }
}

export default App;
