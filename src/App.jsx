import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from './components'
import { Categories,Rules,Questions, Results, Home, PageNotFound } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
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
