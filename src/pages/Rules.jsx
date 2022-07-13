import React from 'react'
import { rules } from '../Utils/RulesData'
import '../styles/rules.css';
import { Link } from 'react-router-dom';

export function Rules() {
  return (
    <div style={{margin:'2rem'}}>
        <h1 className='center-text h5'>Rules to follow!</h1>
        <div className='rules-container'>
            {
                rules.map(rule=>(
                    <ul className="list stacked-list" key={rule.id}>
                        <li className="stacked-list-item">{rule.rule}</li>
                    </ul>
                ))
            }
            <Link to='/questions' className='button play-btn'>start</Link>
        </div>
    </div>
  )
}

