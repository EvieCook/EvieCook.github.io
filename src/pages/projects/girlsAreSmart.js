import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import GaS1 from '../../images/GaS1.jpg'
import GaSCL from '../../images/GaSCL.jpg'
import GaSLL from '../../images/GaSLL.jpg'
import GaSC from '../../images/GaSC.jpg'
import GaSMP from '../../images/GaSMP.jpg'
import GaSCB from '../../images/GaSCB.jpg'

const GirlsAreSmart = () => {
  return (
        <>
        <h1>Girls are S.M.A.R.T. Co-Director</h1>
        <p>Girls are S.M.A.R.T. (Studious, Mighty, Amazing, Resilient, and Talented) is a new event that will be hosted by Society of Women Engineers (SWE). The event invites first through fifth grades girls onto Mines campus to engage in STEM activites and explore what it means to be an engineer and scientist. At Girls are S.M.A.R.T., participants will: </p>
        <ul className='list-disc'>
          <li>Learn about the scientific process and design processes</li>
          <li>Build problem-solving and communication skills</li>
          <li>Engage with various fields of STEM</li>
        </ul>
        <CaptionedImage image={GaS1} caption="Evelyn Cook Interacting" maxHeight={72}/>

        <p></p>
        <h2>Binary Bracelets</h2>
        <p></p>
        <p></p>

        <h2>Circuit Bugs</h2>
        <p></p>
        <p></p>
        <CaptionedImage image={GaSCB} caption="Circuit Bugs Activity" maxHeight={72}/>

        <h2>Cotton Ball Launchers</h2>
        <p></p>
        <p></p>
        <CaptionedImage image={GaSCL} caption="Cotton Ball Launcher Activity" maxHeight={72}/>

        <h2>Lava Lamps</h2>
        <p></p>
        <p></p>
        <CaptionedImage image={GaSLL} caption="Lava Lamp Activity" maxHeight={72}/>

        <h2>Magnetic Putty</h2>
        <p></p>
        <p></p>
        <CaptionedImage image={GaSMP} caption="Magnetic Putty Activity" maxHeight={72}/>

        <h2>Marshmellow Constellations</h2>
        <p></p>
        <p></p>
        <CaptionedImage image={GaSC} caption="Marshmellow Constellations Activity" maxHeight={72}/>

        <h2>Pinecone Painting</h2>
        <p></p>
        <p></p>
        </>
  )
}

export default GirlsAreSmart
