import { useState } from "react";
import "../css/LightSwitch.css";

//must import Css to function
// Named Export
function LightSwitch() {
    //STATE HOOK--variables   function> <variable>
    let [isOn, setIsOn] = useState<boolean>(false);

    function setOffOrOn(){
        isOn ? setIsOn(false) : setIsOn(true);

        if(isOn){
            isOn = false;
        }
        else{
            isOn = true;
        }
    }

    function displayOnOff() :string{
    if(isOn){
        return 'On';
    }
    else{
        return 'Off';
    }
    }
    
    let lightSwitchClass = "LightSwitch " + (isOn ? "blueBackground" : "");
    return (
        //JSX-----toString key word takes boolean to the functions-{}inserts javaScript into html
        <div className={lightSwitchClass}>
         
            <h1>Switch</h1>
            <p>{displayOnOff()}</p>
            {/* //CONDITIONAL RENDERING */}
            {
                isOn ? <button onClick={() => setOffOrOn()}>Off</button>
                    :
                    <button onClick={() => setOffOrOn()}>On</button>
            }
       
        </div>
    )
}
//Default Export
export default LightSwitch;
