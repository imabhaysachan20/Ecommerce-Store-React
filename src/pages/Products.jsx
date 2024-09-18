import { useLoaderData } from "react-router-dom"
import { customFetch } from "../utils"
import {Filters,PaginationContainer,ProductContainer} from "../components"

const url = "/products"

export const loader = async({request})=>{
  const queryURL = new URL(request.url);
  const params = Object.fromEntries(queryURL.searchParams.entries());
  console.log(params);
  
  const response = await customFetch(url,{
    params:params
  })
  const products = response.data.data;
  const meta = response.data.meta
  
  
  return {products,meta,params}
}

const Products = () => {
  return (
    <>
    <Filters></Filters>
    <ProductContainer></ProductContainer>
    <PaginationContainer></PaginationContainer>
    </>
  )
}

export default Products
