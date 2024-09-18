import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import {Header} from '../components/'
import {Navbar} from '../components/'
import Loading from "../components/Loading"

const HomeLayout = () => {
  const isLoading = useNavigation().state === "loading";
  return (<>
    
    <Header></Header>
    <Navbar></Navbar>
    {isLoading?<Loading/>:<section className="align-element py-20">
    <Outlet></Outlet> 
    </section>}
    
    </>
  )
}

export default HomeLayout
