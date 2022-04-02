import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useQuestions } from '../contexts/QuestionsContext';
import '../styles/categories.css';
import { categories } from '../Utils/categories-data';


export function Categories() {
  const {quizState,categoryId,fetchQuestionsHandler} = useQuestions()

  useEffect(async() => {
    await fetchQuestionsHandler(categoryId)
    console.log('questionstate',quizState)
    
  }, [categoryId])

  return (
    <div >
        <h1 className='center-text h5'>Select by Category</h1>
        <div className='categories-container'>
        {
            categories?.map(category=>(   
              <Link to='questions' key={category.id}>           
                <div class="card category-card"  onClick={()=>fetchQuestionsHandler(category.id)}>
                  <div class="card-media">
                      <img class="vc-image"
                      src={category.img}
                      alt="cover" />
                  </div>
                  <div class="overlay">
                      <p class="overlay-text text-sm">{category.name}</p>
                  </div>                    
                </div> 
              </Link> 
            ))
        }
        </div>
    </div>
  )
}

