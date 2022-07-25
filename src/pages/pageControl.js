import React, { Suspense } from 'react'

// Use React.lazy to load page only when the user needs it
const HomePage = React.lazy(() => import('./home'))
const ProjectSelect = React.lazy(() => import('./projectSelect'))
const ExperiencePage = React.lazy(() => import('./experience'))
const Page404 = React.lazy(() => import('./page404'))

const ExampleProject = React.lazy(() => import('./projects/exampleActivity'))
const GirlScoutEngineeringDay = React.lazy(() => import('./projects/girlScoutEngineeringDay'))
const GirlsAreSmart = React.lazy(() => import('./projects/girlsAreSmart'))

const allPages = {
  Home: <HomePage/>,
  Projects: <ProjectSelect/>,
  Experience: <ExperiencePage/>,
  exampleproject: <ExampleProject/>,
  girlscoutengineeringday: <GirlScoutEngineeringDay/>,
  girlsaresmart: <GirlsAreSmart/>
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
