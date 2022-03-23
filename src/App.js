import Home from './pages/Home'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'
import ErrorPage from './pages/handler/ErrorPage'
<<<<<<< HEAD
import Product from './pages/Product/Product'
import Categories from './pages/Categories/categories'
import "bootstrap/dist/css/bootstrap.min.css";


=======
// <<<<<<< Updated upstream
import Product from './pages/Product/Product'
import Categories from './pages/Categories/categories'

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './shared/components/UI/Footer'

// >>>>>>> Stashed changes
>>>>>>> 3fb023d0762d5892fb82662905d874c241f51719
function App() {
  return (
    
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/product/:productID" element={<Product />} />
    <Route path="/category" element={<Categories />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
    
    
    
    
  );
}

export default App;
