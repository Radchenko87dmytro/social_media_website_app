import React from 'react'
import {useQuery} from "@tanstack/react-query"
import Axios from 'axios';


const useGetCat = () => {
    const {
        data, 
        refetch, 
        isLoading: isCatLoading,
        error, 

        } = useQuery(["cat"], async ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
      })

      const refetchData = () => {
        alert("Data Refetched")
        refetch()
      }

      if (error) {

      }

  return {data, refetchData, isCatLoading}
//   (
//     <div>useGetCat</div>
//   )
}

export default useGetCat