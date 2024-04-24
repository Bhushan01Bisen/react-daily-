import { useRef } from "react"
import { useDispatch } from "react-redux"

 
export const BRedux = () => {

const dispatch = useDispatch()
    const locRef=useRef(null)

    const handleName=()=>{
        const loc= locRef.current.value
     

        dispatch({
            type:'LOC',
            data:loc
        })
    }
  return (
    <div>
          <input ref={locRef} />
        <button onClick={handleName}>Location</button>
    </div>
  )
}