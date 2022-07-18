import React from 'react'
import nothropGrumman from '../images/northropGrumman.png'
import defaultImage from '../images/defaultImage.png'

const allExperience = [
  {
    title: 'Technical College Intern - Tooling',
    company: 'Northrop Grumman',
    date: 'June 2022 - Present',
    image: northropGrumman,
    description:
            <>
                <ul className="list-disc">
                    <li>Wrote technical write-ups</li>
                    <li>Computed machine design related hand-calculations</li>
                    <li>Ran finite element anlysis simulations</li>
                    <li>Determined tool discrepencies and procurement of new tools</li>
                    <li>Produced technical engineering drawings</li>
                </ul>
            </>

  },
  {
    title: 'Metallurgical Research Assistant',
    company: 'Colorado School of Mines',
    date: 'October 2020 - May 2021',
    image: defaultImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Assisted with the assembly of vacuum-sealed lab equipment</li>
                    <li>Worked to troubleshhot complex systems</li>
                    <li>Communicated with equipment suppliers</li>
                </ul>
            </>

  }
]

export default allExperience
