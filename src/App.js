import react, { useEffect } from "react";
import { useState } from "react";
import BmiPoints from "./BmiPoints";
import LineGraph from "./LineGraph";
import LegendTable from "./LegendTable";


function App() {

const[height, setHeight] = useState("");
const[weight, setWeight] = useState("");
const[gender, setGender] = useState("");
const[data, setData] = useState({      
  YourHeight: height,
  YourWeight: weight,
  YourGender:gender})

let startEffect = true

    function createData(e){
    const inputHeight = document.getElementById("height").value;
    const inputWeight = document.getElementById("weight").value;
    const inputGenders = document.querySelectorAll(".radioBtn");

    if(inputHeight != "" && inputWeight != ""){
      setHeight(inputHeight);
      setWeight(inputWeight)
    

    for (let i = 0; i < inputGenders.length; i++) {
      if(inputGenders[i].checked){
        setGender(inputGenders[i].value)
      }
      
    }

    setData({
      YourHeight: height,
      YourWeight: weight,
      YourGender:gender
    })

    startEffect = false;

  }
}

useEffect(() =>{
  setData({
    YourHeight: height,
    YourWeight: weight,
    YourGender:gender
  })

  },[height])







  return (
    <div 
    className="Main"
    >
      <div 
      className="Header"
      >
        <h1 className="title">
            BMI calculator
          </h1>  
      </div>
      <div 
      className="content-container"
      >
        <div 
        className="formBmi"
        >
          <p>Height:</p>
          <input type={"number"} className="inputForm" id="height"></input>
          <p>Weight:</p>
          <input type={"number"} className="inputForm" id="weight"></input>
          <p>Gender:</p>
            <label htmlFor="male" className="labeltag">Male</label>
            <input type={"radio"} name="gender" className="radioBtn" id="male" value="m"></input> <br></br>
            <label htmlFor="female" className="labeltag">Female</label>
            <input type={"radio"} name="gender" className="radioBtn" id="female" value="f"></input> <br></br>
           <button className="sendBtn" onClick={createData}>Send</button>
        </div>
          <BmiPoints data={data}/>
      </div>
    </div>
  );
}

export default App;
