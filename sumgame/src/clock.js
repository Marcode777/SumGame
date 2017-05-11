import React from 'react';

export default class Clock extends React.Component{

  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  componentWillMount(){
    this.timeID = setInterval(
      ()=> {this.tick()}, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
        <div>
          <h3>THE TIME IS NOW: {this.state.date.toLocaleTimeString()}</h3>
        </div>
      );
  }
}