import React, { Suspense } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

// Main Pages
const HomePage = React.lazy(() => import('./pages/home'))
const ProjectSelect = React.lazy(() => import('./pages/projectSelect'))
const ExperiencePage = React.lazy(() => import('./pages/experience'))
const Page404 = React.lazy(() => import('./pages/page404'))
// Project pages
const GirlScoutEngineeringDay = React.lazy(() => import('./pages/projects/girlScoutEngineeringDay'))
const GirlsAreSmart = React.lazy(() => import('./pages/projects/girlsAreSmart'))
const SocietyOfWomenEngineers = React.lazy(() => import('./pages/projects/societyOfWomenEngineers'))
const VanguardScholarsProgram = React.lazy(() => import('./pages/projects/vanguardScholarsProgram'))
const SeniorCapstone = React.lazy(() => import('./pages/projects/seniorCapstone'))
const VirtualClassroomTeacher = React.lazy(() => import('./pages/projects/virtualClassroomTeacher'))
const LabviewEasyBakeOven = React.lazy(() => import('./pages/projects/labviewEasyBakeOven'))
const CFDProject = React.lazy(() => import('./pages/projects/cfdProject'))

function App () {
  return (
  <>
    <HashRouter>
      <div className="flex flex-col min-h-screen w-full items-center overflow-hidden bg-gradient-to-t from-gray-100 to-gray-300">
        <Navbar/>
        <div className={'flex flex-col items-center px-2 md:w-2/3 w-full mb-16'}>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="experience" element={<ExperiencePage/>} />
                <Route path="projects/">
                  <Route path="" element={<ProjectSelect/>} />
                  <Route path="girlscoutengineeringday" element={<GirlScoutEngineeringDay/>} />
                  <Route path="girlsaresmart" element={<GirlsAreSmart/>} />
                  <Route path="societyofwomenengineers" element={<SocietyOfWomenEngineers/>} />
                  <Route path="vanguardscholarsprogram" element={<VanguardScholarsProgram/>} />
                  <Route path="seniorcapstone" element={<SeniorCapstone/>} />
                  <Route path="virtualclassroomteacher" element={<VirtualClassroomTeacher/>} />
                  <Route path="labvieweasybakeoven" element={<LabviewEasyBakeOven/>} />
                  <Route path="cfdproject" element={<CFDProject/>} />

                </Route>
                <Route path="*" element={<Page404/>} />
              </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
  </>
  )
}

export default App
