import React, { Component } from 'react';
import { BarChart, AreaChart, LineChart } from 'react-d3';

var position = {
  left: 65,
  chartWidth: 441,
  intervalWidth: 441/50,
};




export default class Bar extends Component {

  isMousedown = false;

  state = {y:100, x:0};

  componentDidMount() {
  }

  move(event){

    if(this.isMousedown == false) return;

    var value = (220 - event.pageY) / 1.5;

    var pageX = event.pageX;

    var index = this.getBarIndex(pageX);

    // console.log(index);

    this.setState({y: value, x: index});
  }

  getBarIndex( pageX ){

    // if ( pageX < position.left + postion.intervalWidth) return 0

    return Math.floor((pageX - position.left) / position.intervalWidth) ;
  }

  mousedown(){
  
    this.isMousedown = true;
  }

  mouseup(){
 
    this.isMousedown = false;
  }

  render(){

    // console.log(this.props.data);

    if(this.props.data[0].values[this.state.x])
      this.props.data[0].values[this.state.x].y = this.state.y;

    return ( 
      <div onMouseMove={this.move.bind(this)} onMouseDown={this.mousedown.bind(this)}  onMouseUp={this.mouseup.bind(this)}>
        <LineChart
                  data={this.props.data}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  xAxisTickInterval={{unit: 'day', interval: 10}}
                  title='Bar Chart'
        />
      </div>
    );
  }
}