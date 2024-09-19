import { useLoaderData } from "react-router-dom"
import { customFetch } from "../utils"
import {Filters,PaginationContainer,ProductContainer} from "../components"

const url = "/products"

const productsQuery = (params)=>{
  const {search,category,company,sort,price, shipping,page} = params;
  return {
    queryKey:["products",
      search ?? '',category??"all",company??"all",sort??"a-z",price??100000,shipping??false,page??1
    ],
    queryFn:async ()=>{return  await customFetch(url,{
      params:params
    })}
  }
}


export const loader = (queryClient)=>async({request})=>{
  const queryURL = new URL(request.url);
  const params = Object.fromEntries(queryURL.searchParams.entries());
  const response = await queryClient.ensureQueryData(productsQuery(params));
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
