import React,{useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';

export function CategoryCard({id,name,img,description}) {
  const navigate = useNavigate()
  const {categoryId,fetchQuestionsHandler,quizDispatch} = useQuiz()

  useEffect(async() => {
    await fetchQuestionsHandler(categoryId)  
  }, [categoryId])

  return (
        <div class="card category-card" key={id} onClick={()=>fetchQuestionsHandler(id)}>
            <div class="card-media">
                <img class="vc-image"
                src={img}
                alt="cover" />
            </div>
            <div className='card-content'>
              <div className='content-title'>
                <p className='text-lg'>{name}</p>
              </div>
              <div className='desc'>
                <span>{description}</span>
                <Link to='/questions'><button onClick={()=>quizDispatch({type:'CLEAR'})} className='button play-btn'>Play</button></Link>
              </div>
            </div>                   
        </div> 
  )
}
