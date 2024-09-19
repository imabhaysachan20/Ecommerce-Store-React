import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {HomeLayout,Error, Register,Login,Products,Landing,Cart,Orders,About,Checkout} from "./pages"
import ErrorElement from "./components/ErrorElement"
import {loader as LandingLoader} from "./pages/Landing"
import {loader as ProductLoader} from "./pages/Products"
import SingleProduct, {loader as SingleProductLoader} from "./pages/SingleProduct"
import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { loader as checkoutLoader } from "./pages/Checkout"
import { loader as ordersLoader } from "./pages/Orders"
import {store} from "./Store"
import { action as checkoutAction } from "./components/CheckOutForm"
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5,
    }
  }
})


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
        loader:LandingLoader(queryClient)
      },
      {
        path:"products",
        element:<Products/>,
        loader:ProductLoader(queryClient),
        errorElement:<ErrorElement/>
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        loader:SingleProductLoader(queryClient)
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"orders",
        element:<Orders/>,
        loader:ordersLoader(store,queryClient)
      },
      {
        path:"checkout",
        element:<Checkout/>,
        loader:checkoutLoader(store),
        action:checkoutAction(store,queryClient)
      },
      {
        path:"about",
        element:<About/>      },
    ]
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store)
  },
  {
    path:"/register",
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction
  },
])

export default function App() {

  return <QueryClientProvider client={queryClient}>
    
  <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
}