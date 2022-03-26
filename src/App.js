import './App.css';
import Home from './pages/Home'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'
import ErrorPage from './pages/handler/ErrorPage'
import Product from './pages/Product/Product'
import Categories from './pages/Categories/categories'
import MainCategories from './pages/Categories/MainCategories'
import Profile from './pages/User/Profile'
import Order from './pages/User/Order'
import Footer from './shared/components/Footer/Footer'
import { LogInGuard,LogOutGuard } from './auth/authGuards'

function App() {
  return (
    
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path='/login' element={<LogOutGuard />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route exact path='/signup' element={<LogOutGuard />}>
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route exact path='/user/:id' element={<LogInGuard />}>
        <Route path="/user/:id" element={< Profile />} />
      </Route>
      <Route exact path='/orders/:userID' element={<LogInGuard />}>
        <Route path="/orders/:userID" element={<Order />} />
      </Route>
      <Route path="/product/:productID" element={<Product />} />
      <Route path="/category/:catName/:filter" element={<Categories />} />
      <Route path="/mainacategory/:mainCat" element={< MainCategories />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
    
    
    
    
  );
}

export default App;
