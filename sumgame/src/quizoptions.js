import React from 'react';

export default class QuizOptions extends React.Component{
  render(){
    return(
        <div className="fields">
          <div className="field-block">{this.props.option}</div>
        </div>      
      );
  }
}