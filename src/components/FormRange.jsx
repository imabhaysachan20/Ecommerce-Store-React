import { useState } from "react"
import {formatPrice} from "../utils/"



const FormRange = ({label,name,size,price}) => {
  const step = 1000;
  const maxPrice =100000;
  const [selectPrice,setSelectPrice] = useState(price || maxPrice);


  return (
    <div>
    <label htmlFor={name} className="label cursor-pointer">
      <span className="label-text capitalize">{label}</span>
      <span>${formatPrice(selectPrice)}</span>
    </label>
      <input type="range" name={name} min={0} max={maxPrice}  value={selectPrice} onChange={(e)=>{setSelectPrice(e.target.value)}} className={`range range-primary ${size}`}   step={step}/>
    </div>
  )
}

export default FormRange
