import './index.css'
import './components/components.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Layout from './pages/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
