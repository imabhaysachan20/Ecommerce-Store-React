import { Link } from "react-router-dom"



const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content">
        <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Signin / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Register / Create Account
            </Link>
        </div>
        </div>
    </header>
  )
}

export default Header
