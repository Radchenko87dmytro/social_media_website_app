import React from 'react'
import { useState } from 'react'

const useCount = (initial = 0) => {
    const [count, setCount] = useState(initial)

    const increace = ()=>{
        setCount(count+1)
      }
      const decreace = ()=>{
        setCount(count-1)
      }
      const restart = ()=>{
        setCount(0)
      }

    // const increace = ()=>{
    //     setCount((prev)=> prev+1)
    //   }
    //   const decreace = ()=>{
    //     setCount((prev)=> prev-1)
    //   }
    //   const restart = ()=>{
    //     setCount(0)
    //   }
    

   return {count, increace, decreace, restart}
   //(
//     <div>useCount</div>
//   )
}

export default useCount