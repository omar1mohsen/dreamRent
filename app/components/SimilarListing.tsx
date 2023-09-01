import React, { useEffect, useState } from 'react'
import { Listings } from '../offers/page'
import { collection, getDocs, limit, orderBy, query, where } from '@firebase/firestore'
import { db } from '@/firebase'
import {
  Pagination,
  Navigation,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import ListingCard from './ListingCard';

function SimilarListing({listing} : {listing : any}) {
  const [listings , setListings] = useState<Listings | any>()
    useEffect(()=>{
        const fetchListings = async ()=>{
            try{
                // get ref
                const listingsRef = collection(db,'listings')

                // create a query 
                const q = query(
                    listingsRef,
                    where('type' , "==" , listing.type),
                    orderBy('timestamp' , 'desc'),
                    limit(5)
                     )
                // execute query 
                const querySnap = await getDocs(q)

                const listings : any[] = []
                querySnap.forEach((doc)=>{
                    if(doc?.data().title === listing.title){

                    }else{
                      return listings.push(({
                          id : doc.id,
                          data : doc.data()
                      }))
                    }
                })
                setListings(listings)
            }catch(error){
                console.log('Error fetching listings', error)
            }
        }
        fetchListings()
    },[listing.title,listing.type])
  return (
    <Swiper
          // install Swiper modules
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView:1,
            },
            639: {
              slidesPerView: 2,
            },
            865:{
              slidesPerView:2
            },
          }}
          modules={[Pagination, Navigation, A11y, EffectCoverflow, Autoplay]}
          grabCursor={true}
          slidesPerView={2}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          key={uuidv4()}
          className='!py-2 mb-10 !pb-10 max-sm:w-full'
        >
          {listings?.map((listing: any) => {
            return (
              <SwiperSlide key={uuidv4()} className="!cursor-default">
                <ListingCard key={listing.id} id={listing.id} listing={listing.data}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
  )
}

export default SimilarListing