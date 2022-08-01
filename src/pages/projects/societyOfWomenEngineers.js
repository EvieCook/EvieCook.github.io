import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import SWE1 from '../../images/SWE1.jpg'
import SWE2 from '../../images/SWE2.jpg'
import SWE3 from '../../images/SWE3.jpg'
import SWE4 from '../../images/SWE4.jpg'
import SWE5 from '../../images/SWE5.jpg'
import SWE6 from '../../images/SWE6.jpg'
import SWE7 from '../../images/SWE7.PNG'
import SWE8 from '../../images/SWE8.PNG'
import GaS1 from '../../images/GaS1.jpg'
import GSED1 from '../../images/GSED1.jpg'

const SocietyOfWomenEngineers = () => {
  return (
        <>
        <h1>Society of Women Engineers Leader</h1>
        <p>Society of Women Engineers (SWE) is a group of like-minded women pursuing a degree in engineering. Our mission is to empower women to achieve their full potential in carrers as engineers and leaders. SWE provides oppurtunites to gain confidence through leadership skills, volunteer oppurtunites, the SWE National Conference and career preparation, and bonding with fellow women engineers. Being a member of SWE has allowed me to follow my passion of STEM and sharing it with younger generations.</p>
        <div className='flex'>
          <CaptionedImage image={SWE1} caption="Mines M Climb Volunteer" maxHeight={72}/>
          <CaptionedImage image={SWE3} caption="STEM Night Volunteer" maxHeight={72}/>
          <CaptionedImage image={SWE4} caption="SWE National Conference" maxHeight={72}/>
        </div>
        <div className='flex'>
          <CaptionedImage image={SWE5} caption="SWE Networking Reception" maxHeight={72}/>
          <CaptionedImage image={SWE6} caption="Girls on the Rise Volunteer" maxHeight={72}/>
          <CaptionedImage image={GSED1} caption="Evelyn Cook Speaking at GSED" maxHeight={72}/>
        </div>
        <div className='flex'>
          <CaptionedImage image={SWE2} caption="SWE Welcome Back BBQ" maxHeight={72}/>
          <CaptionedImage image={SWE7} caption="2019 GSED Volunteer" maxHeight={72}/>
          <CaptionedImage image={GaS1} caption="Evelyn Cook Interacting" maxHeight={72}/>
        </div>
        <CaptionedImage image={SWE8} caption="Evelyn Cook Interacting" maxHeight={72}/>
        </>
  )
}

export default SocietyOfWomenEngineers
