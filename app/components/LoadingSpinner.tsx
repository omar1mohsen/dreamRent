import { CircularProgress } from '@mui/material'
import React from 'react'

function LoadingSpinner() {
  return (
    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <CircularProgress color="success" />
    </div>
  )
}

export default LoadingSpinner