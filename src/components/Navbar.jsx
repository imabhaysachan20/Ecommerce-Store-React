import {BsCart3,BsMoonFill,BsSunFill} from "react-icons/bs"
import { FaBarsStaggered } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import NavLinks from "../components/NavLinks"
import { useEffect, useState } from "react"

const Navbar = () => {
    const themes = {
        light:"light",
        dark:"dark"
    }   
    
    const getThemeFromLocalStorage = ()=> {
       return localStorage.getItem("theme") || themes.light;
    }

    const [theme,setTheme] = useState(getThemeFromLocalStorage());

  
    const handleSetTheme = ()=>{
        let newTheme = theme==="light"?themes.dark:themes.light;
        setTheme(newTheme);
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem("theme",theme);
    },[theme])



  return (
    <nav className="bg-base-200 ">
        <div className="navbar align-element">
            <div className="navbar-start">
                <NavLink to = "/" className="hidden lg:flex btn btn-primary text-3xl text-center">C</NavLink>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden"><FaBarsStaggered></FaBarsStaggered></label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200">
                       <NavLinks></NavLinks>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleSetTheme}/>
                <BsSunFill className="swap-off w-4 w-4"></BsSunFill>
                <BsMoonFill className="swap-on h-4 w-4"></BsMoonFill>
                </label>
                

                <NavLink to ="/cart" className="btn btn-ghost btn-circle">
                <div className="indicator">
                <BsCart3 className="h-6 w-6">
                </BsCart3>
                    <span className="badge badge-sm badge-primary indicator-item">0</span>
                </div>
                
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
