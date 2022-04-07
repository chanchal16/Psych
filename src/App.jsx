import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from './components'
import { Categories,Rules,Questions, Results, Home } from './pages';

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
        </Routes>       
      </main>
      <Footer/>
    </div>
  )
}
export default App
