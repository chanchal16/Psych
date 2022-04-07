import React from 'react'
import faq from '../../assets/faq.svg';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../Utils/categories-data';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
        <div className='banner'>
            <div className='heading-div'>
                <p className='h3 gray2-text banner-heading'>
                   <span className='primary-text'>psych!</span> - a new way to eliminate your 
                   boredom and test your knowledge.
                </p>
                <Link to='/categories'>
                    <button className='button explore-btn'>Explore Quizzes  
                       <span className='arrow'> <i class="fas fa-angle-double-right"></i></span>
                    </button>
                </Link>
            </div>
            <div className='img-div'>
                <img src={faq} alt='banner-img' className='res-image '/>
            </div>           
        </div>
        {/* most played */}
        <div className='most-played'>
            <h6 className='h3 center-text'>Most Played</h6>
            <div className='categories-container'>
                {
                    categories.map((category)=>(
                        category.mostplayed && 
                        <CategoryCard id={category.id} img={category.img} 
                        name={category.name} description={category.description} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
