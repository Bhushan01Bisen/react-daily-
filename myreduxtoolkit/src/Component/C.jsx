 
import { useSelector } from "react-redux"

export const C = () => {
    const storeData=useSelector((state)=>state)
    const {nam,loc}=storeData.nameLoc;
  return (
    <div>
        <h1>Name:{nam}</h1>
     <h2>Loction:{loc}</h2>
{/* 
     <h1>Name::{storeData?.nameLoc?.nam}</h1>
     <h1>Name::{storeData?.nameLoc?.loc}</h1>  this also one away to indacate */}
    </div>
  )
}
