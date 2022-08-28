import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import vanguard1 from '../../images/vanguard1.jpg'
import vanguard2 from '../../images/vanguard2.jpg'
import vanguard3 from '../../images/vanguard3.jpg'
import vanguard4 from '../../images/vanguard4.jpg'

const VanguardScholarsProgram = () => {
  return (
        <>
        <h1>Vanguard Welcome Chair and New Scholars Director</h1>
        <p>The Vanguard Scholars Program is a community of scholars for highly motivated students who embody leadership skills and desire to
          improve our world through STEM. Through Vanguard, I have been able to gain leadership skills by planning events and activities to help
          welcome the incoming freshman to campus. I have had the opportunity to plan crafting, networking, and ZOOM events to introduce the new
          students to faculty, upperclassman, and fellow new students. The most recent event was a vision board activity, where the incoming freshman
          got to create goals for themselves about what they wanted to accomplish during their first year of college.</p>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage image={vanguard1} caption="Vision Board Activity Group 1" maxHeight={72}/>
          <CaptionedImage image={vanguard2} caption="Vision Board Activity Group 2" maxHeight={72}/>
        </div>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage image={vanguard3} caption="Vision Board Activity Group 3" maxHeight={72}/>
          <CaptionedImage image={vanguard4} caption="Vision Board Activity Group 4" maxHeight={72}/>
        </div>
        </>
  )
}

export default VanguardScholarsProgram
