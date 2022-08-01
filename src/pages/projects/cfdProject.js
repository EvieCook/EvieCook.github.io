import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import cfd1 from '../../images/cfd1.jpg'
import cfd2 from '../../images/cfd2.jpg'
import cfd3 from '../../images/cfd3.jpg'
import cfd4 from '../../images/cfd4.jpg'

const CFDProject = () => {
  return (
        <>
        <h1>Computational Fluid Dynamics Simulation</h1>
        <p>Computational Fluid Dynamics (CFD) Simulation is a useful tool to determine the impact an air/liquid has on a system. For this scenario, air was used at different speeds to compare a CPU and RAM Chips total system coolness.</p>
        <p>The pictures below are the top temperatures of the 1 Cubic Feet per minute (CFM) and 15 CFM, respectively. As the inlet speed increased the temperature is drastically decreased.</p>
        <div className='flex'>
            <CaptionedImage image={cfd1} caption="1 CFM Top Temperature" maxHeight={72}/>
            <CaptionedImage image={cfd2} caption="15 CFM Top Temperature" maxHeight={72}/>
        </div>
        <p>The system is cooling with fatser inlet flow because that cooled air we are starting with is moving through the system quickly enough to circulate the air. When the inlet flow is virtually zero, that cool air entering is stagnant asborbing the heat from the system while also keeping the system in that heat. The images below are a demonstration of the flow trajectories of the 1 CFM and 15 CFM, respectively.</p>
        <div className='flex'>
            <CaptionedImage image={cfd3} caption="1 CFM Flow Trajectory" maxHeight={72}/>
            <CaptionedImage image={cfd4} caption="15 CFM Flow Trajectory" maxHeight={72}/>
        </div>
        <p>There are multiple ways to increase the coolage of the system besides increasing the speed of the inlet flow. The CPU wattage can be decreased to comuse less energy, providing a cooler system. The temperature of the power supply can be decreased or the air coolant can be replaced with a liquid coolant due to its high thermal conductivity and higher density.</p>
        </>
  )
}

export default CFDProject
