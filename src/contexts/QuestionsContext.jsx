import React,{useState,createContext,useContext,useReducer} from 'react';
import axios from 'axios';
import { questionsReducer } from '../reducers/questionsReducer';

const QuestionsContext = createContext()

function QuestionsContextProvider({children}) {
    const [questionsState,questionsDispatch] = useReducer(questionsReducer,{
      questions:[],
      selectedOption:'',
      index:0,
      score:0})
    const [categoryId,setCategoryId] = useState(null);
    const[questions,setQuestions] = useState([])

    const fetchQuestionsHandler = async(id)=>{
      try{
        await axios.get('https://opentdb.com/api.php?amount=10&category='+id)
        .then(res=>{
          questionsDispatch({type:'GET_QUESTIONS',payload:res.data.results})
          setCategoryId(id);
        })   
      }catch(err){
          console.error(err)
      }           
    }
   
  const providerObj = {categoryId,questions,setQuestions,questionsDispatch,questionsState,fetchQuestionsHandler}
  return (
    <div>
        <QuestionsContext.Provider value={providerObj}>
            {children}
        </QuestionsContext.Provider>
    </div>
  )
}
const useQuestions = ()=>useContext(QuestionsContext)
export {QuestionsContextProvider,useQuestions}