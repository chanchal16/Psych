import React,{useMemo} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/nav.css';
import spikes from '../../assets/spikes.svg'
import { useQuiz } from '../contexts/QuizContext';
import { debounce } from '../Utils/debounce';

export function Navbar() {
  const {quizState,quizDispatch} = useQuiz()
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/categories') 
  }

  const searchQuizByCategory = (e)=>{
    quizDispatch({type:'SEARCH',payload:e.target.value.toLowerCase()})    
  }
   // debounce onchange handler
  // memoizes the debounced handler, but also calls debounce() only during initial rendering of the component 
  const debouncedChangeHandler = useMemo(
    () => debounce(searchQuizByCategory,1000),
  [quizState.searchQuery]);

  const logoutHandler = ()=>{
    localStorage.removeItem('psychuser')
    navigate('/')
  }

  return (
    <div>
        <header className="navbars">
          <Link to=''  className="menu-icon">
            <img src={spikes} width="40px" height="40px" alt="logo" />
          </Link>
          <Link to='/'  className="brand-name h6">
              Psych!
          </Link>
          <nav>
            <form onSubmit={handleSearch} className='search-form'>
              <input type='search' className='search' placeholder='search'
                onChange={debouncedChangeHandler} />
              <span className='search-icon gray'><i className="fas fa-search fa-sm"></i> </span>
            </form>
            <li className="list-items">
            <Link to='/rules' className="secondary-link">
              Guidelines
            </Link>
            </li>
            <li className="list-items">
              <button onClick={logoutHandler} className='button primary-btn'>Logout</button>
            </li>
          </nav>
        </header>
    </div>
  )
}
