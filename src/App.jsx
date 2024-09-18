import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {HomeLayout,Error, Register,Login,Products,Landing,Cart,Orders,About,Checkout} from "./pages"
import ErrorElement from "./components/ErrorElement"
import {loader as LandingLoader} from "./pages/Landing"
import {loader as ProductLoader} from "./pages/Products"
import SingleProduct, {loader as SingleProductLoader} from "./pages/SingleProduct"
const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:LandingLoader
      },
      {
        path:"products",
        element:<Products/>,
        loader:ProductLoader,
        errorElement:<ErrorElement/>
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        loader:SingleProductLoader
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"orders",
        element:<Orders/>
      },
      {
        path:"checkout",
        element:<Checkout/>
      },
      {
        path:"about",
        element:<About/>      },
    ]
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:"/register",
    element:<Register/>,
    errorElement:<Error/>
  },
])

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}