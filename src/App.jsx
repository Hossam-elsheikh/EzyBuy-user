
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import GroceryPage from './Pages/GroceryPage'
import BeautyPage from './Pages/BeautyPage'
import KidsPage from './Pages/KidsPage'
import FashionPage from './Pages/FashionPage'
import ElectronicsPage from './Pages/ElectronicsPage'
import SingleProductPage from './Pages/SingleProductPage'
import ProductCarePlan from './Components/ProductCarePlan/ProductCarePlan'
import HealthWellness from './Pages/Health & Wellness'
function App() {
let routers = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true , element:<HomePage/> },
    {path:'login',element:<LoginPage />},
    {path:'register',element:<RegisterPage/>},
    {path:'grocery',element:<GroceryPage/>},
    {path:'beauty',element:<BeautyPage/>},
    {path:'kids',element:<KidsPage/>},
    {path:'fashion',element:<FashionPage/>},
    {path:'electronics',element:<ElectronicsPage/>},
    {path:'product',element:<SingleProductPage/>},
    {path:'productPlan',element:<ProductCarePlan/>},
    {path:'Health',element:<HealthWellness/>}

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
