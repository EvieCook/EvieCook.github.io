import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import GSED1 from '../../images/GSED1.jpg'
import GSEDCS from '../../images/GSEDCS.jpg'
import GSEDES from '../../images/GSEDES.jpg'
import GSEDFS from '../../images/GSEDFS.jpg'
import GSEDK from '../../images/GSEDK.jpg'
import GSEDOW from '../../images/GSEDOW.jpg'
import GSEDMP from '../../images/GSEDMP.jpg'
import GSEDSI from '../../images/GSEDSI.jpg'

const GirlScoutEngineeringDay = () => {
  return (
        <>
        <h1>Girl Scout Engineering Day Director</h1>
        <p>Every year, Society of Women Engineers (SWE) hosts Girl Scout Engineering Day, a statewide half-day outreach event for Girl Scout Juniors. They have the oppurtunity to be exposed to different areas within the Science, Technology, Engineering, and Math (STEM) values. Girl Scount Engineering Day prepares participants to:</p>
        <ul className='list-disc'>
          <li>Define introductory science, engineering, and mathematics concepts</li>
          <li>Demonstrate their interest in STEM-type classes, and extracurricular activites</li>
          <li>Apply their learning to future hands-on experiences to complete the Girl Scout STEM patch</li>
        </ul>
        <CaptionedImage image={GSED1} caption="Evelyn Cook Speaking" maxHeight={72}/>

        <p>As the Girl Scout Engineering Day Director, my role was organizing and planning the entire event. Seven activites were designed to introduce STEM to roughly 350 Girl Scout Juniors and taught by the help of over 40 volunteers. Using project managment skills to manage the event schedules, lead weekly meetings, and train volunteers.</p>
        <p></p>
        <p></p>
        <h2>Controlling Sound</h2>
        <p></p>
        <CaptionedImage image={GSEDCS} caption="Controlling Sound Activity" maxHeight={72}/>
        <p></p>
        <h2>Engineering Seismic Waves</h2>
        <p></p>
        <CaptionedImage image={GSEDES} caption="Seismic Waves Activity" maxHeight={72}/>
        <p></p>
        <h2>Fire Snake Shock Waves</h2>
        <p></p>
        <CaptionedImage image={GSEDFS} caption="Shock Waves Activity" maxHeight={72}/>
        <p></p>
        <h2>Kaleidoscopes</h2>
        <p></p>
        <CaptionedImage image={GSEDK} caption="Kaleidoscope Activity" maxHeight={72}/>
        <p></p>
        <h2>Magnetic Putty</h2>
        <p></p>
        <CaptionedImage image={GSEDMP} caption="Magnetic Putty Activity" maxHeight={72}/>
        <p></p>
        <h2>Ocean Waves in a Bottle</h2>
        <p></p>
        <CaptionedImage image={GSEDOW} caption="Ocean Waves Activity" maxHeight={72}/>
        <p></p>
        <h2>Simple Instruments</h2>
        <p></p>
        <CaptionedImage image={GSEDSI} caption="Simple Instruments Activity" maxHeight={72}/>
        </>
  )
}

export default GirlScoutEngineeringDay
