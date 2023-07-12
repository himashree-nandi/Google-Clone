import React from 'react'
import DisplayResult from '../DisplayResults/DisplayResult'

export default function SearchResults({results}) {
    console.log(results.items)
  return (
    <div>
        {
            results.items.map((item,index)=>{
                return <DisplayResult item={item} key={index}/>
            })
        }
    </div>
  )
}
