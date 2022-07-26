import React from 'react'

const CaptionedImage = ({ image, caption, alt }) => {
  if (alt === undefined) {
    alt = caption
  }

  return (
        <div className={'flex flex-col m-2'}>
            <img src={image} className={`max-w-80 max-h-80 border-emerald-800 rounded-md border-b-2
            ${caption !== undefined ? ' rounded-bl-none' : ''}`} alt={alt}></img>
            <div className="flex rounded-b-lg">
                <p className={'mt-0 px-1 text-sm bg-emerald-800 rounded-b-sm text-white'}>{caption}</p>
            </div>
        </div>
  )
}

export default CaptionedImage
