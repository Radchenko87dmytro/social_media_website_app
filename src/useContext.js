import React from 'react'

const useContext = () => {

    const TopComponent = () => {
        const [stste, setState] = useState()
        return (
            <div>
                <MiddleComponent state={state}/>
            </div>
        )
    }

    const MiddleComponent = (state) => {
        return (
            <div>
                <BottomComponent state={state}/>
            </div>
        )
    }

    const BottomComponent = (state) => {
        return (
            <div> {state} </div>
        )
    }

  return (
    <div>useContext</div>
  )
}

export default useContext