import cad from '../images/cad.jpg'
import code from '../images/code.jpg'
import chart from '../images/chart.jpg'

const allSkills = [
  {
    category: 'CAD & Simulation',
    image: cad,
    skills:
        [
          'Certified SolidWorks Associate (CSWA)',
          'Computational Fluid Dynamics (CFD)',
          'Finite Element Analysis (FEA)',
          'Autodesk Fusion 360',
          'Siemens Teamcenter',
          'Siemens NX 1946'
        ]
  },
  {
    category: 'Programming Languages',
    image: code,
    skills:
        [
          'LabView',
          'Arduino',
          'MATLAB',
          'Python',
          'Mathcad',
          'Engineering Equation Solver (EES)'
        ]
  },
  {
    category: 'Other Skills',
    image: chart,
    skills:
        [
          'Technical Writing',
          'Agile',
          'Time Management',
          'Organization',
          'Communication'
        ]
  }
]

export default allSkills
