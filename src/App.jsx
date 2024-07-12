import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Layout from './component/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Layout>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={"/dashboard"} element={<Dashboard/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
  )
}

export default App