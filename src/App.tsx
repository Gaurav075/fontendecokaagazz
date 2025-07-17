


import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Sustainability from "./pages/Sustainability";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import PartnerWithUs from "./pages/PartnerWithUs";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Order from "./pages/Order";
import OrderComplete from "./pages/OrderComplete";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>
      <Toaster />
      <Sonner />

        </CartProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;