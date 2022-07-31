import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import vCT1 from '../../images/vCT1.jpg'
import vCT2 from '../../images/vCT2.jpg'

const VirtualClassroomTeacher = () => {
  return (
        <>
        <h1>Virtual Classroom Teacher</h1>
        <p>A part of the Women in Science, Enigneering and Math (WISEM) initiative at Colorado School of Mines is to provide oppurtunites for rural elementary, middle and high school students to engage in STEM activites. These classroom takeovers were held over ZOOM for about an hour and included a small lesson plan discussing your topic of choice and an activity that followed a Colorado Education Requirement for that grade. I decided to teach first grade about sound and how saound can make matter vibrate. We discussed the characteristics of waves, the differences between load and soft waves, and how different animals have different speaking and hearing frequencies. To demonstrate that sound can make matter vibrate, harmonicas were made.</p>
        <CaptionedImage image={vCT1} caption="Colorado Teaching Standards" maxHeight={72}/>
        <CaptionedImage image={vCT2} caption="Harmonica Materials" maxHeight={72}/>
        </>
  )
}

export default VirtualClassroomTeacher
