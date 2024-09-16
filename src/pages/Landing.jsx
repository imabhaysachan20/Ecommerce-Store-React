import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero"
import { customFetch } from "../utils";
import { FeatureProducts } from "../components";

const url = "/products?featured=true"

export const  loader = async()=>{
  const {data} = await customFetch.get(url);
  return data.data;   
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
