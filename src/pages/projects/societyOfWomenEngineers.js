import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import SWE1 from '../../images/SWE1.jpg'
import SWE2 from '../../images/SWE2.jpg'
import SWE3 from '../../images/SWE3.jpg'
import SWE4 from '../../images/SWE4.jpg'
import SWE5 from '../../images/SWE5.jpg'

const SocietyOfWomenEngineers = () => {
  return (
        <>
        <h1>Society of Women Engineers Member</h1>
        <p>Society of Women Engineers (SWE) is a group of like-minded women pursuing a degree in engineering. Our mission is to empower women to achieve their full potential in carrers as engineers and leaders. SWE provides oppurtunites to gain confidence through leadership skills, volunteer oppurtunites, the SWE National Conference and career preparation, and bonding with fellow women engineers. Being a member of SWE has allowed me to follow my passion of STEM and sharing it with younger generations.</p>
        <CaptionedImage image={SWE1} caption="Mines M Climb Volunteer" maxHeight={72}/>
        <CaptionedImage image={SWE2} caption="Escape Room Bonding" maxHeight={72}/>
        <CaptionedImage image={SWE3} caption="STEM Night Volunteer" maxHeight={72}/>
        <CaptionedImage image={SWE4} caption="SWE National Conference" maxHeight={72}/>
        <CaptionedImage image={SWE5} caption="Weekly Wednesday Meetings" maxHeight={72}/>
        </>
  )
}

export default SocietyOfWomenEngineers
