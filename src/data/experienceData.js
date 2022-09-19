import React from 'react'
import northropGrumman from '../images/northropGrumman.png'
import mines from '../images/mines.jpg'

const allExperience = [
  {
    title: 'Mechanical Engineering Intern - Tooling',
    company: 'Northrop Grumman',
    date: 'June 2022 - Present',
    image: northropGrumman,
    description:
            <>
                <ul className="list-disc">
                    <li>Supported production of graphite epoxy motor cases for the defense and commercical areospcae industry</li>
                    <li>Ran finite element analysis simulations and validated them with hand calculations on stress and structural components</li>
                    <li>Supported manufacturing floor by resolving discrepant tooling, utilized floor management program Maximo</li>
                    <li>Worked with outside vendors and procurement team to guarantee cost-effective and timely purchasing of warehouse equipment and tools</li>
                    <li>Produced technical engineering drawings following Geometric Dimensioning and Tolerancing (GD&T) and drafting standards</li>
                </ul>
            </>

  },
  {
    title: 'Metallurgical Research Assistant',
    company: 'Colorado School of Mines',
    date: 'October 2020 - May 2021',
    image: mines,
    description:
            <>
                <ul className="list-disc">
                    <li>Assisted with the assembly of multi-million dollar vacuum-sealed lab equipment</li>
                    <li>Worked to troubleshoot complex systems</li>
                    <li>Communicated with third-party equipment suppliers</li>
                    <li>Installation of structured cabling systems</li>
                </ul>
            </>

  }
]

export default allExperience
