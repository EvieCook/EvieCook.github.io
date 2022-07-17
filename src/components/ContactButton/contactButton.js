import React from 'react'

const ContactButton = () => {
  const [showing, setShowing] = React.useState(false)

  const nothingToScrapeHere = () => {
    return ['nothingevelnothing'.slice(7, 11) + 'ynace to the eook'.replace('ace to the e', 'c'), 'mines is an edu'.replace(' is an ', '.')]
  }
  let component
  if (showing) {
    component =
      <div>
        <p className='underline text-blue-600'>
          {nothingToScrapeHere().join('@')}</p>
     </div>
  } else {
    component =
      <p
        onClick={() => setShowing(true)}
        className={'inline-block px-6 py-2.5 bg-gray-700  border-emerald-800 border-b-2 font-bold text-white rounded shadow-lg hover:bg-emerald-800 active:bg-emerald-900 transition duration-150 ease-in-out'}
      >
        Click for Details
      </p>
  }

  return (
        <React.Suspense fallback={<div>loading...</div>}>
          <div>
            {component}
          </div>
        </React.Suspense>
  )
}

export default ContactButton
