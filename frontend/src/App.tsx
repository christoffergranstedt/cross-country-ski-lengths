import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className="bg-gray-800 h-screen text-white">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
