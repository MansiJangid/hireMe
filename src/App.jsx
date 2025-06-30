
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { JobDetails } from './pages/JobDetails'
import {Home} from './pages/Home'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jobs/:id" element={<JobDetails/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
