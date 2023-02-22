import React, { useCallback, useEffect, useState } from 'react';

//for timer
let currentTimer = 0
//for mileage counter
let currentMiles = 0 

const DurationExercise = () => {

    // used screenshot from professor Murray on canvas
    // stopwatch/timer implementation

    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(()=> {
        if (running) {
            setTimer((timer)=> timer+10)
        }
    }, [running])
    useEffect(()=> {
        currentTimer= setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    },[running])
    let startStop = useCallback(()=> {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    
    //my mileage implementation
    //updated the timer implementation to count mileage
    //my added app feature counted the miles of the runner

    let [miles, setMiles] = useState(false)
    let [timed, setTimed] = useState(0)
    let updatedMileage = useCallback(()=> {
        if (miles) {
            setTimed((timed)=> timed+10)
        }
    }, [miles])
    useEffect(()=> {
        currentMiles= setInterval(updatedMileage, 50)
        return () => clearInterval(currentMiles)
    }, [miles] )
    let startPause = useCallback(()=> {
        setMiles(!miles)
        clearInterval(currentMiles)
    }, [miles])

    let mile = (Math.floor((timed / (1000*60)) % 60)).toString().padStart(2, "0")
    let pointMile = (Math.floor((timed / 1000) % 60)).toString().padStart(2, "0", "0")
   
    return (
 
        <div>
            <p>Running</p>
            <p>Timer: {mins}:{secs}</p>
            <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
            <button onClick={()=> {
                setTimer(0)
            }}>Reset</button>

            <p>Current Mileage: {mile}.{pointMile} miles </p>
            <button onClick={startPause}>{miles ? "Pause" : "Start"}</button>
            <button onClick={()=> {
                setTimed(0)
            }}>Reset</button>
            <p style={{fontSize:".6em"}}>
                Incrementing .01 miles every 5 seconds based on users speed for an average of a 8:30 minute mile.</p>
        </div>
    ) 
}
export default DurationExercise