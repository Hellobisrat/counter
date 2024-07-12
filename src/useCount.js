import { useState } from "react";

const useCount = ()=>{
  const [counter, setCounter]=useState(0)
  const Addbutton=()=>{
    return(
      setCounter(counter+1)
    )
  }
  const Minusbutton=()=>{
    return (
      setCounter(counter-1)
    )
  }
  return {counter,Addbutton,Minusbutton}
}

export default useCount;