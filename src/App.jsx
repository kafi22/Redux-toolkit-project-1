import React, { useEffect } from "react"

import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom'
import Home from "./Page/Home"
import Cart from "./Page/Cart"
import Navbars from "./Components/Navbar"
import { Provider } from "react-redux"
import store from "./Feature/Store"
import About from "./Page/About"
import Container from "react-bootstrap/esm/Container"





const App = () => {

 

  // const route = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={ <Navbars/> }>
  //       <Route index element={<Home />} />
  //       <Route path="about" element={ <About />} />
  //       <Route path="cart" element={<Cart />} />
  //     </Route>
  //   )
  // )

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
       <Navbars />
      ),

      children : [
        {
          path: "/",
          element : (
            <Home />
          )
        },

        {
          path: "about",
          element: ( 
            <About />
          )
        },

        {
          path : 'cart',
          element : (
            <Cart />
          )
        }


      ],

    },
   
  ])

  return (

    <Provider store={store}>
 
      <RouterProvider router={routes} />
   
    </Provider>
    

  )
}

export default App