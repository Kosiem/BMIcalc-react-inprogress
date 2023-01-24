import React, { useEffect } from 'react'

export default function LegendTable({bmi}) {
    const Underweight = "<18.5";
    const Normal = "<25";
    const Preobesity = "<30";
    const Obesity1 = "<35";
    const Obesity2 = "<40";
    const Obesity3 = ">40"



    

    useEffect(()=> {
    console.log(bmi)
    if(isNaN(bmi) == true){
    if(bmi < 18.5){
        document.querySelectorAll(".here")[0].textContent = "You are here";
      }else if(bmi <=25){
        document.querySelectorAll(".here")[1].textContent = "You are here";
      }else if(bmi > 25 && bmi < 30){
        document.querySelectorAll(".here")[2].textContent = "You are here";
      } else if(bmi >= 30 && bmi < 35){
        document.querySelectorAll(".here")[3].textContent = "You are here";
      } else if(bmi >= 35 && bmi <= 40){
        document.querySelectorAll(".here")[4].textContent = "You are here";
      } else {
        document.querySelectorAll(".here")[5].textContent = "You are here";
        
      }
    }
})
      
      


  return (
    <>
        <table className='legendtable'>
            <tr><td className='Underweight'>Underweight</td><td className='points'>{Underweight}</td><td className='here'></td></tr>
            <tr><td className='Normal'>Normal</td><td className='points'>{Normal}</td><td className='here'></td></tr>
            <tr><td className='Pre-obesity'>Pre-obesity</td><td className='points'>{Preobesity}</td><td className='here'></td></tr>
            <tr><td className='Obesity-class-I'>Obesity class I</td><td className='points'>{Obesity1}</td><td className='here'></td></tr>
            <tr><td className='Obesity-class-II'>Obesity class II</td><td className='points'>{Obesity2}</td><td className='here'></td></tr>
            <tr><td className='Obesity-class-III'>Obesity class III</td><td className='points'>{Obesity3}</td><td className='here'></td></tr>
        </table>
    
    </>
  )
}
