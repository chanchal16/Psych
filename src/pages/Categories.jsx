import React from 'react';
import { CategoryCard } from '../components';
import { categories } from '../Utils/categories-data';

export function Categories() {
  return (
    <div >
        <h1 className='center-text h5'>Select by Category</h1>
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

