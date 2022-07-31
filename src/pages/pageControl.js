import React, { Suspense } from 'react'

// Use React.lazy to load page only when the user needs it
const HomePage = React.lazy(() => import('./home'))
const ProjectSelect = React.lazy(() => import('./projectSelect'))
const ExperiencePage = React.lazy(() => import('./experience'))
const Page404 = React.lazy(() => import('./page404'))

const GirlScoutEngineeringDay = React.lazy(() => import('./projects/girlScoutEngineeringDay'))
const GirlsAreSmart = React.lazy(() => import('./projects/girlsAreSmart'))
const SocietyOfWomenEngineers = React.lazy(() => import('./projects/societyOfWomenEngineers'))
const VanguardScholarsProgram = React.lazy(() => import('./projects/vanguardScholarsProgram'))
const SeniorCapstone = React.lazy(() => import('./projects/seniorCapstone'))
const VirtualClassroomTeacher = React.lazy(() => import('./projects/virtualClassroomTeacher'))
const LabviewEasyBakeOven = React.lazy(() => import('./projects/labviewEasyBakeOven'))

const allPages = {
  Home: <HomePage/>,
  Projects: <ProjectSelect/>,
  Experience: <ExperiencePage/>,
  girlscoutengineeringday: <GirlScoutEngineeringDay/>,
  girlsaresmart: <GirlsAreSmart/>,
  societyofwomenengineers: <SocietyOfWomenEngineers/>,
  vanguardscholarsprogram: <VanguardScholarsProgram/>,
  seniorcapstone: <SeniorCapstone/>,
  virtualclassroomteacher: <VirtualClassroomTeacher/>,
  labvieweasybakeoven: <LabviewEasyBakeOven/>
}

const CurrentPage = ({ currentRoute }) => {
  let page = allPages[currentRoute]
  if (!page) page = <Page404/>

  return (
        <Suspense fallback={<div>Loading...</div>}>
            {page}
        </Suspense>
  )
}

export default CurrentPage
