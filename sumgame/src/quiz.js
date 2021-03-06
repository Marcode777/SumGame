import React from 'react';
import QuizOptions from './quizoptions';
import classNames from 'classnames';

import Clock from './clock';

export default class Quiz extends React.Component{

  constructor(){
    super()
    let riddle = this.playGame();
    let correct = false;
    let gameOver = false;


    this.state = { riddle, correct, };
    this.renderOptions = this.renderOptions.bind(this);
    this.checkResults = this.checkResults.bind(this);
    this.play = this.play.bind(this);
  }

  randomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)) +min;
  }

  generateRandomOptions(sum){
    // let result = sum;
    let resultsArray = [];
    let randomNumberArray = [];

    while (randomNumberArray.length <= 3){
      let randomNumber = this.randomNumber(1, 19);
      if(randomNumberArray.indexOf(randomNumber) > -1) continue;
      randomNumberArray.push(randomNumber);
    }
     

      for(let i = 0; i < 3; i++){
        let addSubtract = this.randomNumber(0, 1);
        let result = sum;
    if(addSubtract === 1){
      //add the number to the result
      result += randomNumberArray[i];
      resultsArray.push(result);
    } else {
      // subtract the number from result
      result -= randomNumberArray[i];
      resultsArray.push(result);
      }
    }

  

    return resultsArray;
  }

  playGame(){
    let field1 = this.randomNumber(20, 50);
    let field2 = this.randomNumber(20, 50);
    let result = field1 + field2;
    let resultsArray = this.generateRandomOptions(result);
    resultsArray.push(result);
    resultsArray.sort(function(a, b){return 0.5 - Math.random()})
    console.log(resultsArray);
    let riddle = {
      resultsArray: resultsArray, 
      field1: field1,
      field2: field2,
      answer: result
    };
    console.log(riddle);

    if(this.state && this.state.gameOver){
      this.setState({
        riddle: riddle
      })
    } else {
      return riddle;
    }
}

   
  
    


  checkResults(option){
    console.log("checkResults called" + option);
    if(this.state.riddle.answer === option){
      console.log("This is the correct answer!");
      this.setState({
        correct: true,
        gameOver: true
      })
    } else{
      console.log("wrong answer, bub.")
      this.setState({
        correct: false,
        gameOver: true
      })
    }
  }

  renderOptions(){
    return(
        <div className="options">
          {this.state.riddle.resultsArray.map((option, i)=> 
            <QuizOptions key={i} option={option} checkResults={ (option) => this.checkResults(option)} />
              )
            }
        </div>
      );
  }

  renderMessage(){
    if(this.state.correct){
      return <h3>You got it correctly! Awesome! Click the button below to play again!</h3>
    } else {
      return <h3>You got it wrong, bub. But you can click the button below to play again!</h3>
    }
  }

  play(){
    this.setState({
      correct: false,
      gameOver: false
    })
    this.playGame();
  }

  render(){
    return(
        <div className="quiz">
          <Clock/>
            <div className="quiz-content">
              <p className="question">What is the sum of <span className="text-info">{this.state.riddle.field1}</span> and <span className="text-info">{this.state.riddle.field2}</span> ?</p>
              {this.renderOptions()}
            </div>
            <div className={classNames('after', {'hide': !this.state.gameOver}, {'wrong animated zoomInDown': !this.state.correct}, {'correct animated zoomInUp': this.state.correct})} >
            <h3>{this.renderMessage()}</h3>
            </div>
            <div className="play-again">
              <a className="button" onClick={this.play}>Play Again</a>
            </div>
        </div>
      );
  }
}