import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/landingpage'
import Services from './screens/services'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
