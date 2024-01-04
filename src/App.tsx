import './index.css'
import './components/components.css'

import { Link, Route, Routes } from 'react-router-dom'
// components
import Home from './pages/Home'
// pages
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
