import React, { useState } from 'react'
import {customFetch} from "../utils/index"
import {generateOptions} from "../utils/utils"

import { useLoaderData ,Link} from 'react-router-dom';
import {formatPrice} from "../utils/index"

export const loader = async({params})=>{
  const {id} = params;
  const response = await customFetch.get(`/products/${id}`);
  const product = response.data.data
  return {product};
}

const SingleProduct = () => {
  const {product} = useLoaderData();
  const {image,title,price,description,colors,company} = product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor,setproductColor] = useState(colors[0]);
  const [amount,setAmount] = useState(1);

  const handelAmount = (e)=>{
    setAmount(parseInt(e.target.value))
  }
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 gap-x-16"> 
        <img src = {image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full '></img>
        <div>
          <h1 className='capitalize text-4xl font-bold'>{title}</h1>
          <h4 className='mt-2 font-bold text-neutral-content text-xl'>{company}</h4>
          <p className='mt-3 text-xl'>${dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          <div className="mt-6">
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color)=>{
                return (
                  <button onClick={()=>{setproductColor(color)}} key = {color} type='button' style = {{backgroundColor:color}} className= {`h-6 w-6 badge mr-2 ${color==productColor && "border-2 border-secondary"}`}></button>
                )
              })}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className='label' htmlFor='amount'>
                <h4 className='text-md font-medium tracking-wider capitalize'>Amount</h4>
              </label>
              <select className='select select-secondary select-bordered ' id="amount" value={amount} onChange={handelAmount}>
                {generateOptions(10)}
              </select>
            </div>
            <div className="mt-10">
              <button className='btn btn-secondary btn-md'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>  

    </section>
  )
}

export default SingleProduct
