import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import capstone1 from '../../images/capstone1.jpg'
import capstone2 from '../../images/capstone2.jpg'
import capstone3 from '../../images/capstone3.jpeg'
import capstone4 from '../../images/capstone4.jpeg'

const SeniorCapstone = () => {
  return (
        <>
        <h1>Product Owner of Capstone Project</h1>
        <p>My senior capstone project is restoring a 1927 Caterpillar Crawler Model 20 Tractor with a 12-member team. The goal of the project is to accurately restore the tractor to its original glory and specifications. As product owner I manage the sprint backlog items and tasks to keep the team on a proper pace to complete the restoration within the timeframe. We utilize SCRUM through Agile Methodology of 2 week sprint cycles to deliever the project on time and within budget for the stakeholder at Lakewood Heritage Center. Being a part of this project has also allowed me to work with hand/power tools and observe mechanical operations.</p>
        <CaptionedImage image={capstone2} caption="Tractor Brought on Campus" maxHeight={72}/>
        <CaptionedImage image={capstone3} caption="Cover and Plow Removed" maxHeight={72}/>
        <CaptionedImage image={capstone1} caption="Removed Tractor Seat Compartment" maxHeight={72}/>
        <CaptionedImage image={capstone4} caption="Front of Tractor" maxHeight={72}/>
        </>
  )
}

export default SeniorCapstone
