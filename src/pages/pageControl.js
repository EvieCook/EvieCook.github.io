import React, { Suspense } from 'react'

// Use React.lazy to load page only when the user needs it
const HomePage = React.lazy(() => import('./home'))
const ActivitiesSelect = React.lazy(() => import('./activitiesSelect'))
const ExperiencePage = React.lazy(() => import('./experience'))
const Page404 = React.lazy(() => import('./page404'))

const ExampleProject = React.lazy(() => import('./activities/exampleActivity'))

const allPages = {
  Home: <HomePage/>,
  Activities: <ActivitiesSelect/>,
  Experience: <ExperiencePage/>,
  exampleproject: <ExampleProject/>
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
