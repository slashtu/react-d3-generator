import React, { Component } from 'react';
import Bar from './Bar.js';

var now = new Date().getTime();

var dummyData = [];

//dummy data
for( let i=0; i < 50; i++ ){
  let day = now - 86400000 * i ;
  dummyData.unshift({ x: new Date(day), y: Math.random() * 100});
}

var chartData = [
  { 
    "name": "Series A",
    "values": dummyData
  }
];

var lineChartPosition = {
  top: 220,
  left: 65,
  chartWidth: 441,
};

export class App extends Component {
  render() {
    return (
      <div>
        <Bar data={chartData} 
             heigh={200} 
             width={500} 
             top={220} 
             left={65} />
      </div>
    );
  }


}