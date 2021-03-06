import React from 'react'
import { useQuiz } from '../contexts/QuizContext';
import '../styles/results.css';
import { useNavigate } from "react-router-dom";

export function Results() {
  let navigate = useNavigate();
  const {quizState,questions} = useQuiz();
  const{score,results} = quizState;

  return (
    <div className='result-container'>
      <h4 className='h6 center-text'>Your score:  
        <span className='score'>{score}/{questions.length * 10}</span>
      </h4> 
      <button className="button primary-btn" onClick={()=>navigate('/categories')}>
          Play again
      </button>
      <div className='result-summary'>
        {
          results?.map(({ques,answer},index)=>(
            <div className='result-card' key={index}>
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
