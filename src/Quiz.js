import React, { Component } from 'react'
import QuizQuestion from "./QuizQuestion.js"

let quizData = require('./quiz_data.json')
class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {quiz_position: 1}

  }
  render() {
    return (
      <QuizQuestion  />
    )
  }
}

export default Quiz
