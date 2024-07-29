

import Home from "../src/pages/home/Home";
import Details from "./pages/Details/Details";
import Layout from "./Layout";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
let r=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:":type",element:<Home/>},
    {path:"latest/:type",element:<Home/>},
    {path:":type/:title",element:<Details/>},
    {path:"latest/:type/:title",element:<Details/>},
  ]}
])
function App() {

  return (
    <>
     <RouterProvider router={r}></RouterProvider>
    </>
  )
}

export default App
