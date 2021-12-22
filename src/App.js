import React, { Component } from 'react'
import Header from "./Components/Header/Header"
import Objects from "./Components/Nav/Objects"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import "./App.scss"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <Objects/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
