import React from 'react'
import '../Pages.css'
import { MathComponent } from 'mathjax-react'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import labview1 from '../../images/labview1.jpg'
import labview2 from '../../images/labview2.jpg'
import labview3 from '../../images/labview3.jpg'
import labview4 from '../../images/labview4.jpg'
import labview5 from '../../images/labview5.jpg'

const LabviewEasyBakeOven = () => {
  return (
        <>
        <h1>LabView Easy Bake Oven</h1>
        <p>A temperature-controlled oven similar to an Easy Bake Oven will be virtually
          constructed and tested. A PID controller will need to be implemented to regulate
          the temperature of the oven. This oven will successfully bake a cookie at the
          desired constant temperature of 350 degrees.</p>
        <p>Using my understanding of the power and amps created by each power supply and
          switching device, I was able to properly place them together to function as one
          strong unit. The diagram below shows the relay switching device I used connected
          to the 12 Volt DC power supply completely wired and functioning.</p>
        <CaptionedImage image={labview1} caption="Electronic Setup" maxHeight={72}/>
        <p>To run the oven, it was important to include a Present Integral Derivative (PID)
          Controller and Pulse-Width Modulation (PWM) to the oven temperature controller
           to run the oven.  Recall that PID controller stands for Proportional, Integral,
           Derivative controller.  That is, the controller output of the PID algorithm is
           a sum of three terms, the proportional term, the integral term, and the derivative
            term.  You can see each term in the PID controller output equation below: </p>
        <MathComponent tex={String.raw`C_O(t) =  K_P * e(t) + K_I * \int e(t) dt + K_D * \frac{de}{dt}`} />
        <p>In the above equation, C<sub>O</sub>(t) is the controller output, which is a function of time.
          e(t) is the error as a function of time, and K<sub>P</sub>, K<sub>I</sub>, and K<sub>D</sub> are the gains for each
          term. The PID algorithm uses not only the current error, but also the derivative
          and integral of the error over time to calculate the controller output. The controllers
          work in unison, heating the oven temperature controller to run the oven.</p>
        <CaptionedImage image={labview2} caption="PID Controller" maxHeight={72}/>
        <CaptionedImage image={labview3} caption="PWM Controller" maxHeight={72}/>
        <CaptionedImage image={labview4} caption="Oven Temperature Controller" maxHeight={72}/>
        <p>Finally, after the oven reaches 350 degrees fahrenheit and bakes for a few minutes a
          successful cookie was produced!</p>
        <CaptionedImage image={labview5} caption="Successful Cookie" maxHeight={72}/>
        <p></p>
        </>
  )
}

export default LabviewEasyBakeOven
