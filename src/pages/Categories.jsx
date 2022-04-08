import React from 'react';
import { CategoryCard } from '../components';
import { categories } from '../Utils/categories-data';
import { useNavigate } from "react-router-dom";

export function Categories() {
  let navigate = useNavigate();
  return (
    <div >
        <h1 className='center-text h5'>Select by Category</h1>
        <button class="button fab-primary" onClick={()=>navigate('/')}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <div className='categories-container'>
        {
            categories?.map(category=>(             
                <CategoryCard id={category.id} img={category.img} name={category.name} 
                description={category.description} />           
            ))
        }
        </div>
    </div>
  )
}

