import React from 'react'
import './Pages.css'
import ContactButton from '../components/ContactButton/contactButton'
import defaultImage from '../images/defaultImage.png'
import CaptionedImages from '../components/CaptionedImage/CaptionedImage'

const HomePage = () => {
  return (
        <>
        <h1>Evelyn Cook</h1>
        <p>Your Bio Here :)</p>
        <CaptionedImages image={defaultImage} alt="Portrait of Evelyn Cook" maxHeight={72}/>

        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
  )
}

export default HomePage
