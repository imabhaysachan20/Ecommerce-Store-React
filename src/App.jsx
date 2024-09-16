import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {HomeLayout,Error, Register,Login,Products,Landing,Cart,Orders,About,Checkout} from "./pages"

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"products/:id",
        element:<Products/>
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