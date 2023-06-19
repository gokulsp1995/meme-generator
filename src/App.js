import React from "react"
import "./App.css"
import Header from "./components/Header"
import Meme from "./components/Meme"
import memesData from "./memesData"

 function App() {
  return(
    <>
      <Header />
      <Meme />
    </>
  )
}

export default App