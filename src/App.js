import React, { Component } from 'react';
import Line from './Chart/Line';
import Bar from './Chart/Bar';
import Area from './Chart/Area';

var now = new Date().getTime();

function createData(){
  var dummyData = [];

  //dummy data
  for( let i=0; i < 50; i++ ){
    let day = now - 86400000 * i ;
    dummyData.unshift({ x: new Date(day), y: Math.floor(Math.random() * 100)});
  }

  var chartData = [
    { 
      "name": "Series A",
      "values": dummyData
    }
  ];

  return chartData;
}


export class App extends Component {

  render() {
    return (
      <div>
        <div style={{color: 'red'}}>"mousedown" left button, then "move"</div>
        <Line data={createData()} 
             fill={'#3182bd'}
             title='Bar Chart'
             xAxisTickInterval={{unit: 'day', interval: 10}}
             height={200} 
             width={500} 
             top={240} 
             left={65} 
        />
        <Bar data={createData()} 
             fill={'#3182bd'}
             title='Bar Chart'
             xAxisTickInterval={{unit: 'day', interval: 10}}
             height={200} 
             width={500} 
             top={548} 
             left={65} 
        />
        <Area data={createData()} 
             fill={'#3182bd'}
             title='Bar Chart'
             xAxisTickInterval={{unit: 'day', interval: 10}}
             height={200} 
             width={500} 
             top={850} 
             left={65} 
        />
      </div>
    );
  }
}