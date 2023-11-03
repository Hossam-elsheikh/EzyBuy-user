import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import PasswordPage from './Pages/PasswordPage'
import RegisterPage from './Pages/RegisterPage'
import GroceryPage from './Pages/GroceryPage'
import BeautyPage from './Pages/BeautyPage'
import KidsPage from './Pages/KidsPage'
import FashionPage from './Pages/FashionPage'
import ElectronicsPage from './Pages/ElectronicsPage'
import SingleProductPage from './Pages/SingleProductPage'
import ProductCarePlan from './Components/ProductCarePlan/ProductCarePlan'
import HealthWellness from './Pages/Health & Wellness'
import Cart from './Components/Cart/Cart'
import MyItems from './Components/MyItems/MyItems'
import Reorder from './Components/MyItems/Reorder'
import Lists from './Components/MyItems/Lists'
import Registers from './Components/MyItems/Registers'
import AccountPage from './Pages/AccountPage'
import PurchaseHistory from './Components/Account/PurchaseHistory'
import MySavings from './Components/Account/MySavings'
import Wallet from './Components/Account/Wallet'
import PersonalInfo from './Components/Account/PersonalInfo'
import Addresses from './Components/Account/Addresses'
import Community from './Components/Account/Community'
import Giving from './Components/Account/Giving'
import LoginContextProvider from './context/LoginContext'
function App() {
  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage /> },
        { path: 'grocery', element: <GroceryPage /> },
        { path: 'beauty', element: <BeautyPage /> },
        { path: 'kids', element: <KidsPage /> },
        { path: 'fashion', element: <FashionPage /> },
        { path: 'electronics', element: <ElectronicsPage /> },
        { path: 'product', element: <SingleProductPage /> },
        { path: 'protection', element: <ProductCarePlan /> },
        { path: 'health', element: <HealthWellness /> },
        { path: 'cart', element: <Cart /> },
        { path: 'myaccount', element: <AccountPage />, children: [
            { index: true, element: <PurchaseHistory /> }, //fix later
            { path: 'mysavings', element: <MySavings /> },
            { path: 'wallet', element: <Wallet /> },
            { path: 'personalinfo', element: <PersonalInfo /> },
            { path: 'addresses', element: <Addresses /> },
            { path: 'community', element: <Community /> },
            { path: 'giving', element: <Giving /> },
          ]
        },
        {path: 'myitems', element: <MyItems />, children: [
            { index: true, element: <Reorder /> }, //fix later
            { path: 'lists', element: <Lists /> },
            { path: 'registers', element: <Registers /> },
          ]
        },
      ]
    },
    { path: 'login', element: <LoginPage /> },
    { path: 'passwordPage', element: <PasswordPage /> },
    { path: 'register', element: <RegisterPage /> },
    { path: '*', element: <NotFound /> }
  ])
  return (
    <>
        <LoginContextProvider>
       
          <RouterProvider router={routers}>
          <App />
         </RouterProvider>
      
      </LoginContextProvider>

    </>
  )
}

export default App
