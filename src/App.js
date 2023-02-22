import './App.css';
import React, {useState } from "react";
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';


export default function App() {

  const [curScreen, setCurrScreen] = useState("main")
  const repScreen = () => {
    setCurrScreen("rep")
  }
  const durScreen = () => {
    setCurrScreen("dur")
  }
  let returnScreen =
    <div> 
      <h1>Go do Something!</h1>
      <p>Select an Exercise:</p>
      <button onClick={repScreen}>Push Ups</button>
      <br></br>
      <button onClick={durScreen}>Running</button>
    </div>

  if (curScreen === "rep") {
  returnScreen = <RepetitionExercise />
  } if(curScreen === "dur") {
  returnScreen = <DurationExercise />
  }

  return (
      <div>
      {returnScreen}
      </div>
  )

}
