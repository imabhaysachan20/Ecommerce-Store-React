import React from 'react'
import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"
import { useLoaderData } from 'react-router-dom'
const FeatureProducts = () => {
  const products = useLoaderData();
  return (
     
    <div className='pt-24'>
      <SectionTitle text='featured products'></SectionTitle>
      <ProductsGrid></ProductsGrid>
    </div>
  )
}

export default FeatureProducts
