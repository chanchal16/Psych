import React,{useState,useEffect} from 'react';
import { useQuiz } from '../contexts/QuizContext';
import '../styles/quiz.css';
import { decodeHTML } from '../Utils/decode';
import { Link,useNavigate } from 'react-router-dom';
import { QuizTimer } from '../components/QuizTimer';

export function Questions() {
  const navigate = useNavigate()
  const {quizState,quizDispatch,questions,setQuestions} = useQuiz()
  const{index,score,selectedOption} = quizState
  const[options,setOptions] = useState([]);
  
  // decode html sent from api
  const encodedQuestions = quizState.questions;
  useEffect(() => {
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      }
    })
    setQuestions(decodedQuestions)  
  }, [encodedQuestions])
  

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));    /**will give random int */
  }

  // will merge the correct and incorrect optns in a new arr
  const getOptions = ()=>{
    let answers;
    if(questions[index]){
       answers = [...questions[index]?.incorrect_answers];
      answers.splice(getRandomInt(questions[index]?.incorrect_answers.length), 0, questions[index]?.correct_answer)
      setOptions(answers);
      }else{
        answers = []
      }   
  }

  const handleNextQuestion = (option)=>{
    quizDispatch({type:'GET_SCORE',payload:option})
    // increase index if less than Qs length
    if(index +1 < questions?.length){
      setTimeout(() => {
        quizDispatch({type:'GET_INDEX' ,payload:{
          ques:questions[index]?.question,
          answer: option
        }});
      }, 500);
    }
  }

   useEffect(() => {
    getOptions()
   }, [index,questions])
  //  check which option was selected
   const checkOption = (option)=>{
     if(selectedOption === option && option === questions[index]?.correct_answer){
       return 'correct'
     }
      if((selectedOption === option) && (option !== questions[index]?.correct_answer)){
       return 'wrong'
     }
     if(option === questions[index]?.correct_answer){
       return 'correct'
     }
   }
// save the result
  const saveResults = ()=>{
    if(index +1 <= questions?.length){
      quizDispatch({
        type:'GET_RESULTS',
        payload:{
          ques:questions[index]?.question,
          answer: selectedOption
        }
      })
    }
  }
  // quit handler
  const quitHandler = ()=>{
    quizDispatch({type:'QUIT'})
    navigate('/categories')
  }
  return (
    <div className='ques-container'>
      <div className='ques-heading'>
        <h1 className='text-md'>Q.{index +1}</h1>
        <span className='text-md'>score: {score}</span>
        {/* {
          questions.length > 0 &&
          <h4>
           00 : <QuizTimer updateQuestion={handleNextQuestion} currentQuestion={questions[index]?.question} seconds={15}/>
          </h4>
        } */}
      </div>
      {
        <div className='question-div'>         
          <p className='h6 center-text'>{questions[index]?.question}</p>
          <ul className='list stacked-list'>
            {
              options.map((option,index)=>(
                <li className={`stacked-list-item ${selectedOption && checkOption(option)}`} key={index} 
                onClick={()=>handleNextQuestion(option)} >
                  {option}
                </li>
              ))
            }
          </ul>
          <div className='btns-div'>
            <button className='button play-btn' onClick={quitHandler}>Quit</button>
            {index >= questions?.length -1 ? (
              <Link to='/results'>
                <button className='button primary-btn save' onClick={()=>saveResults()}>
                  Save 
                </button>
              </Link> 
              ):null
            } 
          </div>        
        </div>
      }
    </div>
  )
}

