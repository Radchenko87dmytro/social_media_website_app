import React from 'react'
import { useState, useEffect, useContext } from 'react'

const useToggle = (initial = false) => {
    const [state, setState] = useState(initial)

    const toggle = () => {
        setState((prev) => !prev)
    }
  return [state, toggle]
    // (
    //     <div>
    //         useToggle

    //     </div>
    // )
}

export default useToggle