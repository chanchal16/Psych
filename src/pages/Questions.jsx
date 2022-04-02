import React,{useState,useEffect} from 'react';
import { useQuestions } from '../contexts/QuestionsContext';
import '../styles/quiz.css';
import { decodeHTML } from '../Utils/decode';

export function Questions() {
  const {questionsState,questionsDispatch,questions,setQuestions} = useQuestions()
  const{index,score,selectedOption} = questionsState
  const[options,setOptions] = useState([]);
  
  // decode html sent from api
  const encodedQuestions = questionsState.questions;
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
      console.log('optns',options)
      }else{
        answers = []
      }   
  }

  const handleNextQuestion = (option)=>{
    setTimeout(() => {
      questionsDispatch({type:'GET_INDEX'});
    }, 1000);
    
      questionsDispatch({type:'GET_SCORE',payload:option})
      console.log('score',score)
  }

   useEffect(() => {
    getOptions()
   }, [index,questions])
   
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
       
  return (
    <div className='ques-container'>
      <div className='ques-heading'>
        <h1 className='text-md'>Q.{index +1}</h1>
        <span className='text-md'>score: {score}</span>
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
        </div>
      }
    </div>
  )
}

