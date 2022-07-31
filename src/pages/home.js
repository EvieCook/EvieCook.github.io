import React from 'react'
import './Pages.css'
import ContactButton from '../components/ContactButton/contactButton'
import evelynPortrait from '../images/evelynPortrait.jpg'
import CaptionedImage from '../components/CaptionedImage/CaptionedImage'

const HomePage = () => {
  return (
        <>
        <h1>Evelyn Cook</h1>
        <p>I am a mechanical engineer with a passion for sharing my love of Science, Technology, Engineering, and Math with younger generations. I value hardwork, dedication, and devotion to this ever growing field.  </p>
        <CaptionedImage image={evelynPortrait} alt="Portrait of Evelyn Cook" maxHeight={72}/>

        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
  )
}

export default HomePage
