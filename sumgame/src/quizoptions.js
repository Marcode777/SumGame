import React from 'react';

export default class QuizOptions extends React.Component{

  constructor(){
    super()
    this.state = {
      
    }
    this.callParentCheckOptions = this.callParentCheckOptions.bind(this);
  }

  callParentCheckOptions(){
    this.props.checkResults(this.props.option);
  }

  render(){
    return(
        <div className="fields animated zoomIn" onClick={this.callParentCheckOptions}>
          <div className="field-block">{this.props.option}</div>
        </div>      
      );
  }
}