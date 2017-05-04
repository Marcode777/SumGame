import React from 'react';
import QuizOptions from './quizoptions';

export default class Quiz extends React.Component{

  constructor(){
    super()
    let riddle = {
      resultsArray: [8, 9, 10, 11], 
      field1: 5,
      field2: 5,
      answer: 10
    };

    this.state = { riddle };
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions(){
    return(
        <div className="options">
          {this.state.riddle.resultsArray.map((option, i)=> 
            <QuizOptions key={i} option={option} />
              )
            }
        </div>
      );
  }

  render(){
    return(
        <div className="quiz">
          <h3>QUIZ Component</h3>
            <div className="quiz-content">
              <p className="question">What is the sum of <span className="text-info">5</span> and <span className="text-info">5</span> ?</p>
              {this.renderOptions()}
            </div>
    
            <div className="play-again">
              <a className="button">Play Again</a>
            </div>
        </div>
      );
  }
}