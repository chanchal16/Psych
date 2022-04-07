import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useQuestions } from '../contexts/QuestionsContext';

export function CategoryCard({id,name,img,description}) {
  const {categoryId,fetchQuestionsHandler} = useQuestions()

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
                <Link to='/questions'><button className='button play-btn'>Play</button></Link>
              </div>
            </div>                   
        </div> 
  )
}
