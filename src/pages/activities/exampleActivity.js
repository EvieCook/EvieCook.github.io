import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import defaultImage from '../../images/defaultImage.png'

const ExampleActivity = () => {
  return (
        <>
        <h1>Example Activity</h1>
        <p>Example Text</p>
        <CaptionedImage image={defaultImage} caption="Example Caption"/>
        </>
  )
}

export default ExampleActivity
