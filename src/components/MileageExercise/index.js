import React, { useCallback, useEffect, useState } from 'react';


//for mileage counter
let currentMiles = 0 

const MileageExercise = () => {
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

export default MileageExercise