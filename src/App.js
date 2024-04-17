import  "./App.css"
import React from 'react'
import Header from "./components/Common/Header"
// import Footer from "./components/Common/Footer"
import MainComponet from "./components/LandingPage/Main"

const App = () => {
  return (
    <div className="app">
        <Header/>
        <MainComponet/>
        {/* <Footer/> */}
    </div>
  )
}

export default App