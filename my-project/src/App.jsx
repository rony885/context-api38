// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Registration from './pages/registration'
import ErrorPage from './components/ErrorPage' 
// import UserContext from './components/UserContext'
import Home from "./pages/Home"
import Navbar from './components/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/navbar' element={<Navbar></Navbar>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
    </>
  )
}

export default App
