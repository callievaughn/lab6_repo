import './App.css';
import React, {useState } from "react";
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import MileageExercise from './components/MileageExercise';


export default function App() {

  const [curScreen, setCurrScreen] = useState("main")
  const repScreen = () => {
    setCurrScreen("rep")
  }
  const durScreen = () => {
    setCurrScreen("dur")
  }
  const mileScreen = () => {
    setCurrScreen("mile")
  }
  let returnScreen =
    <div> 
      <h1>Go do Something!</h1>
      <p>Select an Exercise:</p>
      <button onClick={repScreen}>Push Ups</button>
      <br></br>
      <button onClick={durScreen}>Running</button>
      <br></br>
      <button onClick={mileScreen}>Biking</button>
    </div>

  if (curScreen === "rep") {
  returnScreen = <RepetitionExercise />
  } if(curScreen === "dur") {
  returnScreen = <DurationExercise />
  } if (curScreen === "mile") {
    returnScreen = <MileageExercise />
  }

  return (
      <div>
      {returnScreen}
      </div>
  )

}
