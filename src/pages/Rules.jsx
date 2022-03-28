import React from 'react'
import { rules } from '../Utils/RulesData'
import '../styles/rules.css'

export function Rules() {
  return (
    <div>
        <h1 className='center-text h5'>Rules to follow!</h1>
        <div className='rules-container'>
            {
                rules.map(rule=>(
                    <ul class="list stacked-list" key={rule.id}>
                        <li class="stacked-list-item">{rule.rule}</li>
                    </ul>
                ))
            }
        </div>
    </div>
  )
}

