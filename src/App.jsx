
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Logout from './Components/Logout/Logout'
import NotFound from './Components/NotFound/NotFound'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
let routers = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true , element:<Home/> },
    {path:'login',element:<Login/>},
    {path:'logout',element:<Logout/>},
    {path:'register',element:<Register/>},

  ]},
  {path:'*',element:<NotFound/>}
])
  return (
    <>
    <RouterProvider router={routers}>
    
    </RouterProvider>
    </>
  )
}

export default App
