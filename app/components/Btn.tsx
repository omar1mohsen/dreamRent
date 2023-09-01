import React from 'react'

function Btn({className , content}:{className?: string , content : string}) {
  return (
    <button className={`${className} bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl`}>
  {content}
</button>
  )
}

export default Btn