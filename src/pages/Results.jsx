import React from 'react'
import { useQuestions } from '../contexts/QuestionsContext';
import '../styles/results.css';

export function Results() {
  const {quizState,questions} = useQuestions();
  const{score,results} = quizState;
  console.log('results',quizState)
  return (
    <div className='result-container'>
      <h4 className='h6 center-text'>Your score:  
        <span className='score'>{score}/{questions.length * 10}</span>
      </h4> 
      <div className='result-summary'>
        {
          results?.map(({ques,answer},index)=>(
            <div className='result-card'>
              <h5 className='text-md'>Q.{index+1} {ques}</h5>
              <h5 className={`option ${questions[index]?.correct_answer ===answer? 'correct' : 'wrong'}`}>
                Your ans: {answer}
              </h5>
              {
                questions[index]?.correct_answer !== answer && (
                  <h5 className='correct option'>Correct ans: {questions[index]?.correct_answer}</h5>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
