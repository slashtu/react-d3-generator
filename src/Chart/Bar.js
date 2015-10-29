import React, { Component } from 'react';
import { BarChart, AreaChart, LineChart } from 'react-d3';

export default class Bar extends Component {

  isMousedown = false;

  state = {y:100, x:0};

  static propTypes = { 
    data: React.PropTypes.array.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    top: React.PropTypes.number,
    left: React.PropTypes.number,
    xAxisTickInterval: React.PropTypes.object,
    yAxisScale: React.PropTypes.number,
  };

  static defaultProps = { 
    yAxisScale: 1.5,
  };

  componentDidMount() {
  }

  move(event){

    console.log(this.props.yAxisScale);

    if(this.isMousedown == false) return;

    var value = Math.round((this.props.top - event.pageY) / this.props.yAxisScale);

    var pageX = event.pageX;

    var index = this.getBarIndex(pageX);

    this.setState({y: value, x: index});
  }

  getBarIndex( pageX ){

    var dataLength = this.props.data[0].values.length;
    var intervalWidth = ( this.props.width - 59 ) / dataLength;

    return Math.floor((pageX - this.props.left) / intervalWidth) ;
  }

  mousedown(){
  
    this.isMousedown = true;
  }

  mouseup(){
 
    this.isMousedown = false;
  }

  renderData(){

    var str = "[ ";

    for( let i=0; i< this.props.data[0].values.length; i++){
      str += this.props.data[0].values[i].y + ' , ' ;
    }

    str = str.replace(/,\s*$/, "]");

    return str;
  }

  render(){

    if(this.props.data[0].values[this.state.x])
      this.props.data[0].values[this.state.x].y = this.state.y;

    return ( 
      <div onMouseMove={this.move.bind(this)} onMouseDown={this.mousedown.bind(this)}  onMouseUp={this.mouseup.bind(this)}>
        <BarChart
                  data={this.props.data}
                  width={this.props.width}
                  height={this.props.height}
                  fill={'#3182bd'}
                  xAxisTickInterval={this.props.xAxisTickInterval}
                  title='Bar Chart'
        />
        {this.renderData()}
      </div>
    );
  }
}