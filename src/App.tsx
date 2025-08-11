import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Sustainability from "./pages/Sustainability";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import BulkOrder from './pages/Bulk'
import ProductDetails from "./pages/ProductDetails";
import PartnerWithUs from "./pages/PartnerWithUs";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/authContext";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Order from "./pages/Order";
import OrderComplete from "./pages/OrderComplete";
import MyOrder from './pages/MyOrder'
// import Blog from "./components/community/Blog"
import AllBlogs from "./components/community/AllBlogs";
import BlogDetail from "./components/community/blogFolder/BlogDetail";
import Chitrayan from "./pages/Chitrayan";
import TheCollections from "./components/Chitrayan/TheCollections";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          {/* Wrap your application with AuthProvider to provide auth context */}
        <CartProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/bulk" element={<BulkOrder />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path = "/signup" element={<Signup/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path = "/login" element={<Login/>}/>
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/completed" element={<OrderComplete />} />
            <Route path="/my-orders" element={<MyOrder />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Index />} />
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/chitrayan" element={<Chitrayan />} />
            <Route path="/collection" element={<TheCollections />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
