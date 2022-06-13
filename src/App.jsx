import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from './components'
import { Categories,Rules,Questions, Results, Home, PageNotFound, Login, Signup } from './pages';
import { useAuth } from './contexts/AuthContext';

function App() {
  const {userData} = useAuth()
  return (
    <div className="App">
      {userData.email && <Navbar/>}
      <main>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='categories' element={<Categories/>} />
          <Route path='rules' element={<Rules/>}/>
          <Route path='questions' element={<Questions/>}/>
          <Route path='results' element={<Results/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>       
      </main>
      <Footer/>
    </div>
  )
}
export default App
