import './index.css'
import './components/components.css'
import { Link, Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header'
// pages
import Home from './pages/Home'
import Footer from './components/Footer'
import AlertSuccess from './components/AlertSuccess'
import AlertFail from './components/AlertFail'


function App() {
  return (
    <>
      <AlertSuccess />
      {/* <AlertFail /> */}

      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
