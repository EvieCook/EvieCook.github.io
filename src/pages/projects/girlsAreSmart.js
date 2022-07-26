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
        <p></p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <CaptionedImage image={GaS1} caption="Evelyn Cook Interacting" maxHeight={72}/>

        <p></p>
        <p>Binary Bracelets</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <p>Circuit Bugs</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
        </ul>
        <CaptionedImage image={GaSCB} caption="Circuit Bugs Activity" maxHeight={72}/>

        <p>Cotton Ball Launchers</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
        </ul>
        <CaptionedImage image={GaSCL} caption="Cotton Ball Launcher Activity" maxHeight={72}/>

        <p>Lava Lamps</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
        </ul>
        <CaptionedImage image={GaSLL} caption="Lava Lamp Activity" maxHeight={72}/>

        <p>Magnetic Putty</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
        </ul>
        <CaptionedImage image={GaSMP} caption="Magnetic Putty Activity" maxHeight={72}/>

        <p>Marshmellow Constellations</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
        </ul>
        <CaptionedImage image={GaSC} caption="Marshmellow Constellations Activity" maxHeight={72}/>

        <p>Pinecone Painting</p>
        <p></p>
        <p>Learning Objectives:</p>
        <ul className='list-disc'>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </>
  )
}

export default GirlsAreSmart
