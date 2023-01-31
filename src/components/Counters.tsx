
import { useState } from "react";
import "../css/UpDownCounter.css"



export function UpDownCounter() {
    let[isUp, setIsUp] =useState(0);
    const [isDown, setIsDown] = useState(0);


    return (
    
        <div className="Counter">
            <button>Up</button>
     
            <button>Down</button>

        </div>

    )



}
