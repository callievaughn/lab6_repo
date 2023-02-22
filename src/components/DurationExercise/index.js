import React, { useCallback, useEffect, useState } from 'react';

let currentTimer = 0
let currentMiles = 0 
const Stopwatch = () => {
    // timer
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
        //console.log (timer)
    }, [running])
    let startStop = useCallback(()=> {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    let reset = useCallback(()=> {
        setTimer(0)
    })
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    
    //mileage

    let [miles, setMiles] = useState(false)
    let [timed, setTimed] = useState(0)
    let updateTimed = useCallback(()=> {
        if (miles) {
            setTimed((timed)=> timed+10)
        }
    }, [miles])
    useEffect(()=> {
        currentMiles= setInterval(updateTimed, 50)
        return () => clearInterval(currentMiles)
        //console.log (timer)
    }, [miles])
    let startPause = useCallback(()=> {
        setMiles(!miles)
        clearInterval(currentMiles)
    }, [miles])
    let resetMiles = useCallback(()=> {
        setTimed(0)
    })
    let mile = (Math.floor((timed / (1000*60)) % 60)).toString().padStart(2, "0")
    let pointMile = (Math.floor((timed / 1000) % 60)).toString().padStart(2, "0", "0")
   
    return (
        <div style={{margin: "auto"}}>
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
            <p style={{fontSize:".5em"}}>Running .01 miles every 5 seconds for an average of a 8:30 minute mile.</p>
        </div>
    ) 
}
export default Stopwatch