import React, { useState } from 'react'
import Child from './Child'

 const Parent = () => {

    const [text , setText] = useState ('')
    const onChange = (event) => {
       setText (event.target.value)
       console.log(text);

    }

  return (
    <div>
        <Child onChange = {onChange} />
    </div>
  )
}

export default Parent