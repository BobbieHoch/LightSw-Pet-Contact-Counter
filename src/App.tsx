import React from "react";
import logo from './logo.svg';
import "./App.css";
import { Counters } from "./components/Counters";
import { PetInfo } from "./components/PetInfo";

// import { PetInfo } from "./components/PetInfo";

//javascript and html= jsx

//COMPONENT IS A FUNCTION 'App
function App() {
    //JSX javaScript and HTML mixed
    return (
        //App is parent component of LightSwitch
        <div className="App">
            {/* /* <LightSwitch //>*} */}
            
                <PetInfo />
              {/* <Counters />  */}
        </div>
    );
}

export default App;
