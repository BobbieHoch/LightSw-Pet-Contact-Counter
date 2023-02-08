
import { useState } from "react";
import "../css/UpDownCounter.css"



export function Counters() {
    let[isUp, setIsUp] =useState(0);
    const [isDown, setIsDown] = useState(0);
    const [counter, setCounter] = useState(0);
//counter = 0 e.onClick for each button
    return (
    
        <div className="Counter">
{counter}

            <button onClick = {() => setCounter(counter +1)}>Up</button>

            <button onClick={() => setCounter(counter - 1)}>Down</button>

        </div>

    )



}
