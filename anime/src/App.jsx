
import './App.css'
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Watchnow from './components/Watchnow'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/home'/>
          <Route element={<Home/>} path='/'/>
          <Route element={<Watchnow/>} path='/watch'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
