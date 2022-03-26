import Home from './pages/Home'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'
import ErrorPage from './pages/handler/ErrorPage'
import Product from './pages/Product/Product'
import Categories from './pages/Categories/categories'
import MainCategories from './pages/Categories/MainCategories'
import Profile from './pages/User/Profile'
import Footer from './shared/components/Footer/Footer'

function App() {
  return (
    
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
    <Route path="/user/:id" element={< Profile />} />
  
    
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
