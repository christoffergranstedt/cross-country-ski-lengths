import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AlertContainer } from './Components/AlertContainer/AlertContainer'
import { HomePage } from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className="bg-gray-800 h-screen text-white">
      <AlertContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
