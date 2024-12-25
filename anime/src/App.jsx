
import './App.css'
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Demo from './components/Demo'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/home'/>
          <Route element={<Home/>} path='/'/>
          <Route element={<Demo/>} path='/demo'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
