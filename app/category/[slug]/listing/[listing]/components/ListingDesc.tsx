import handlePrice from '@/app/utilits/helpers/handlePrice'
import React from 'react'
import ListingPrice from './ListingPrice'
import ListingNav from './ListingNav'

function ListingDesc({listing} : {listing : any}) {
  return (
    <div className='py-2'>
        <span className='text-sm md:text-lg -mb-1 block font-semibold text-[--sec-color]'>{listing.address}</span>
        <h3 className='mb-2 text-2xl max-sm:text-lg tracking-wider font-bold text-[--sec-text-color]'>{listing.title}</h3>
        <span className='text-lg -mb-1 block font-semibold capitalize tracking-wider text-[--sec-color]'> listing  for <span className='text-[--sec-text-color]'>{listing.type}</span> </span>
        <ListingPrice listing={listing} />
        <ListingNav listing={listing} />
    </div>
  )
}

export default ListingDesc