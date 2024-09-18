import { useLoaderData } from "react-router-dom"
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useState } from "react"
import {BsFillGridFill,BsList} from "react-icons/bs"

const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const totalProducts = meta.pagination.total

  const [layout,setLayout] = useState('grid');

  const setActiveStyles = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern===layout?`btn-primary text-primary-content`:"btn-ghost text-based-content"}`;
  }
  return (

    <div>

      <header>
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-md text-lg">
          {totalProducts} product{totalProducts>1?"s":""}
        </h4>
        <div className="flex gap-x-2">
          <button type="button" onClick={()=>setLayout('grid')} className={setActiveStyles("grid")}>
            <BsFillGridFill></BsFillGridFill>
          </button>
          <button type="button" onClick={()=>setLayout('list')} className={setActiveStyles("list")}>
            <BsList></BsList>
          </button>
        </div>
        </div>
      </header>
      <div>
        {
          totalProducts=== 0 ?  <h5 className="text-2xl mt-16">No products found!</h5>: layout==='grid'?<ProductsGrid/>:  <ProductsList/>
        }
      </div>

    
      
    </div>
  )
}

export default ProductsContainer
