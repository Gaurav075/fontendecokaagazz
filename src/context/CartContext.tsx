import { createContext, useContext, useState } from "react";

interface CartItem {
    id: string;
    title: string;
    price: number;
    discountedPrice: number;
    quantity: number;
    image: string;
  }
  
  interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: string, delta: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined);
  
  export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
  
    const addToCart = (item: CartItem) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...item, quantity: 1 }];
      });
    };
  
    const updateQuantity = (id: string, delta: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
      );
    };
  
    const removeFromCart = (id: string) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };
  
    const clearCart = () => setItems([]);
  
    return (
      <CartContext.Provider
        value={{ items, addToCart, updateQuantity, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  }