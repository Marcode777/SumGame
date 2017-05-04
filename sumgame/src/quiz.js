import React from 'react';

export default class Quiz extends React.Component{
  render(){
    return(
        <div className="quiz">
          <h3>QUIZ Component</h3>
            <div className="quiz-content">
              <p className="question">What is the sum of <span className="text-info">5</span> and <span className="text-info">5</span> ?</p>
            </div>
            <div className="options">
              <div className="fields"><div className="field-block">10</div></div>
              <div className="fields"><div className="field-block">10</div></div>
              <div className="fields"><div className="field-block">10</div></div>
              <div className="fields"><div className="field-block">10</div></div>
            </div>
            <div className="play-again">
              <a className="button">Play Again</a>
            </div>
        </div>
      );
  }
}