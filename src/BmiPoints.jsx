import React from 'react'
import LegendTable from './LegendTable'


export default function LineChart({ data } ) {


  let height = parseInt(data.YourHeight) / 100
  let weight = parseInt(data.YourWeight)
  let gender = data.YourGender
  let bmi;
  let yourStatus;
  if(data.YourHeight != "" && data.YourWeight != "" && data.YourGender != ""){  

  bmi = weight / (height*height) 
  console.log(bmi);

  bmi = bmi.toFixed(2)

 
  if(bmi < 18.5){
    yourStatus = "Underweight"
  }else if(bmi <=25){
    yourStatus = "Normal"
  }else if(bmi > 25 && bmi < 30){
    yourStatus = "Pre-obesity"
  } else if(bmi >= 30 && bmi < 35){
    yourStatus = "Obesity-class-I"
  } else if(bmi >= 35 && bmi <= 40){
    yourStatus = "Obesity-class-II"
  } else {
    yourStatus = "Obesity-class-III"
  }

  } else {
    bmi = "Please fill all inputs and send the form";
    height = "0"
    weight = "0"
  } 


  return (
    <div className='right-container'>
    <div className='result'>
    <p className='lowerP'> {height} m</p>
    <hr></hr>
    <p className='lowerP'>{weight} kg</p>
    <h1 className={yourStatus}>{bmi}</h1>
    </div>

    <div className='legend'>
      <LegendTable bmi={bmi} />
    </div>

    </div>

  )
}
