import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero"
import { customFetch } from "../utils";
import { FeatureProducts } from "../components";

const url = "/products?featured=true"

const featuredProdcutsQuery = {
  queryKey:['featuredProducst'],
  queryFn:()=>customFetch(url)
}

export const  loader = (queryClient)=>async()=>{
  const response = await queryClient.ensureQueryData(featuredProdcutsQuery);
  const products = response.data.data
  return {products};   
}

const Landing = () => {
  
  return (    
    <>
    <Hero/>
    <FeatureProducts/>
    </>
  )
}

export default Landing
