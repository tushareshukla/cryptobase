import { BrowserRouter, Route, Routes } from "react-router-dom"
import  "./App.css"
import React from 'react'
import Home from "./pages/Home"
import DashboardPage from "./pages/DashboardPage"
import CoinPage from "./pages/CoinPage"
import ComparePage from "./pages/ComparePage"
import WatchListPage from "./pages/WatchListPage"

const App = () => {
  return (
    <div className="app">
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<DashboardPage/>} />
    <Route path="/coin/:id" element={<CoinPage/>} />
    <Route path="/compare" element={<ComparePage/>} />
    <Route path="/watchlist" element={<WatchListPage/>} />
   </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App