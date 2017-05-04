import React from 'react';

export default class Quiz extends React.Component{
  render(){
    return(
        <div className="quiz">
          <h3>QUIZ Component</h3>
          <div className="quiz-content">
          <p className="question">What is the sum of <span className="text-info">5</span> and <span className="text-info">5</span> ?</p>
          </div>
        </div>
      );
  }
}