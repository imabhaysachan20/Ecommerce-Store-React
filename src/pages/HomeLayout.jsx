import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '../components/'
import {Navbar} from '../components/'
const HomeLayout = () => {
  return (<>
    <Header></Header>
    <Navbar></Navbar>
    <section className="align-element py-20">
    <Outlet></Outlet> 
    </section>
    </>
  )
}

export default HomeLayout
