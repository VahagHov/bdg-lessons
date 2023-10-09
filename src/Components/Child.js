import React from 'react'

 const Child = ({onChange , text}) => {
   
  return (
    <div>
        <input value={text} type=' text' onChange={onChange} ></input>
    </div>
  )
}

export default Child