import React from 'react'
import './Pages.css'

import Tile from '../components/Tile/Tile'
import allActivities from '../data/activitiesData'

const ActivitySelect = () => {
  const tiles = []

  allActivities.forEach(element => {
    tiles.push(
            <Tile
                title={element.title}
                description={element.description}
                image={element.image}
                link={element.link}
                key={element.title}
            />)
  })

  return (
        <>
            <h1>My Activities:</h1>
            <div className='flex flex-wrap justify-center mt-10 gap-8'>
                {tiles}
            </div>
        </>
  )
}

export default ActivitySelect
