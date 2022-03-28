import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.css';
import { categories } from '../Utils/Data';

export function Categories() {
   
  return (
    <div >
        <h1 className='center-text h5'>Select by Category</h1>
        <div className='categories-container'>
        {
            categories?.map(category=>(   
              <Link to='rules'>           
              <div class="card category-card" key={category.id}>
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
