import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { LightSwitch } from "./components/LightSwitch";
import { PetInfo } from "./components/PetInfo";

//javascript and html= jsx

//COMPONENT IS A FUNCTION 'App
function App() {
    //JSX javaScript and HTML mixed
    return (
        //App is parent component of LightSwitch
        <div className="App">
            {/* <LightSwitch />
            <PetInfo /> */}
            <Home />
        </div>
    );
}

export default App;
