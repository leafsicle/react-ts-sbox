import React from 'react'
import Header from "./components/Header"
import Button from './components/Button';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header title="Strawberry milk!" isActive={true} />
      <Button onClick={value => {
        console.log(value)
      }} />
    </div >
  )
}

export default App
