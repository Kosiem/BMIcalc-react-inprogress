import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }  from 'react-chartjs-2'



export default function LineChart({ data } ) {
  const height = parseInt(data.YourHeight)
  const weight = parseInt(data.YourWeight)
  const gender = data.YourGender

  const bmi = weight / (height*height) 
  console.log(bmi);
  console.log(typeof(bmi));
 
  return (
    <h1>{bmi}</h1>
  )
}
