import React,{useState,createContext,useContext,useReducer} from 'react';
import axios from 'axios';
import { quizReducer } from '../reducers/quizReducer';

const QuizContext = createContext()

function QuizContextProvider({children}) {
    const [quizState,quizDispatch] = useReducer(quizReducer,{
      questions:[],
      selectedOption:'',
      index:0,
      score:0,
      results:[],
      searchQuery:''
    })
    const [categoryId,setCategoryId] = useState(null);
    const[questions,setQuestions] = useState([])

    const fetchQuestionsHandler = async(id)=>{
      try{
        await axios.get('https://opentdb.com/api.php?amount=10&category='+id)
        .then(res=>{
          quizDispatch({type:'GET_QUESTIONS',payload:res.data.results})
          setCategoryId(id);
        })   
      }catch(err){
          console.error(err)
      }           
    }
   
  const providerObj = {categoryId,questions,setQuestions,quizDispatch,quizState,fetchQuestionsHandler}
  return (
    <div>
        <QuizContext.Provider value={providerObj}>
            {children}
        </QuizContext.Provider>
    </div>
  )
}
const useQuiz = ()=>useContext(QuizContext)
export {QuizContextProvider,useQuiz}