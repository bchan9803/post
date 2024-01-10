import './index.css'
import './components/components.css'
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Layout from './pages/Layout'

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
