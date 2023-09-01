import React from 'react'
import ImagesSlider from './ImagesSlider'
import ListingDesc from './ListingDesc'

function MainListing({listing}:{listing:any}) {
  return (
    <main className='sm:px-2 md:px-5 flex flex-wrap lg:flex-nowrap '>
        <div className="w-full lg:w-1/2 p-3">
        <ImagesSlider images={listing.imgUrls} />
        </div>
        <div className="w-full lg:w-1/2 p-3">
        <ListingDesc listing={listing} />
        </div>
    </main>
  )
}

export default MainListing