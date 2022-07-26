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
        <p>Controlling Sound</p>
        <p>Engineers must consider all aspects of a design before building a final product. They must ask questions and demonstrate out of the box thinking when deciding what might work best. Acoustical engineers must think about the room and material, and what it will be used for to make sure the sounds are properly distributed throughout. Engineers think, build, and explore ideas related to designs of their projects.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Apply the engineering design method process</li>
          <li>Be able to test objects and determine whether they absorb or reflect sound</li>
          <li>Understand the basics of sound waves</li>
        </ul>
        <CaptionedImage image={GSEDCS} caption="Controlling Sound Activity" maxHeight={72}/>

        <p>Engineering Seismic Waves</p>
        <p>In parts of the world seismic waves (earthquakes) are a concern to engineers. Civil engineers have to focus on how the earth’s movements affect how buildings can be built. Stability of the structure and survivability/strength need to be considered when building.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Understand stability and structure and its importance to engineers </li>
          <li>Explain the different types of seismic waves </li>
        </ul>
        <CaptionedImage image={GSEDES} caption="Seismic Waves Activity" maxHeight={72}/>

        <p>Fire Snake Shock Waves</p>
        <p>Explosives are used by multiple engineering disciplines. Mining, Explosive, and Nuclear Engineers need to understand all the aspects of explosives and how to safely execute them. Engineers use explosives to create military equipment, to remove rocks to build and/or rebuild structures and mining for minerals.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Understand how the reaction takes place and waves are produced</li>
          <li>Gain interest in non-traditional engineering paths</li>
        </ul>
        <CaptionedImage image={GSEDFS} caption="Shock Waves Activity" maxHeight={72}/>

        <p>Kaleidoscopes</p>
        <p>Mechanical engineering can offer lots of different pathways into the engineering field. A subsection of Mechanical is optical engineering. Optical engineers design equipment to control light waves. They design telescopes, cameras, and even medical equipment because light plays a vital role in how they work.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Understand light travels in a straight line</li>
          <li>Be able to reflect light and create colorful images</li>
        </ul>
        <CaptionedImage image={GSEDK} caption="Kaleidoscope Activity" maxHeight={72}/>

        <p>Magnetic Putty</p>
        <p>Engineers use magnets in a multitude of fields like Physics, Electrical, Computer Science and Biomedical Engineering. Magnets have an ability to swipe electronic information and the earth produces a magnetic field that engineers study.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Be able to recall a what a magnetic field is and that the earth has one</li>
        </ul>
        <CaptionedImage image={GSEDMP} caption="Magnetic Putty Activity" maxHeight={72}/>

        <p>Ocean Waves in a Bottle</p>
        <p>Environmental Engineers are needed to create energy systems that require water to power, buildings near oceans and beaches, and when building boats. Our earth is covered with more water than land, so engineers need to understand now water can affect our inventions and designs.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Understand why tidal waves act the way they do</li>
          <li>Notice the anatomy of the sea</li>
        </ul>
        <CaptionedImage image={GSEDOW} caption="Ocean Waves Activity" maxHeight={72}/>

        <p>Simple Instruments</p>
        <p>Frequency is important to understand for engineering purposes. Engineers will use their knowledge of frequencies to design commonly used items such as lights and televisions which are specifically programmed to start or stop. Frequency is also an important part of music because notes with different frequencies will make different sounds. Acoustic Engineers will help design auditoriums that allow everyone to hear the music produced on stage.</p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li>Understand frequency</li>
          <li>Be able to give an example of frequency</li>
          <li>Understand different frequencies of sound waves</li>
        </ul>
        <CaptionedImage image={GSEDSI} caption="Simple Instruments Activity" maxHeight={72}/>
        </>
  )
}

export default GirlScoutEngineeringDay
