import React, { useState } from "react";

export default function RepetitionExercise({names}) {

    const [reps, setReps] = useState(0)
    const completeRep = ()=> {
        setReps(reps + 1)
    }
    const resetReps = () => {
        setReps(0)
    }

    return (
    <div>
        <p>Push Ups</p>
        <p>Reps: {reps}</p>
        <button onClick={completeRep}>Complete Rep</button>
        <button onClick={resetReps}>Reset</button>
        </div>
    )
}
