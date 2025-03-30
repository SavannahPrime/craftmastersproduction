
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, ChevronRight, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Custom Iron Garden Gate",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
    quantity: 1
  },
  {
    id: 3,
    name: "Steel Security Door",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    quantity: 1
  }
];

const Cart = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.0725; // 7.25% tax
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 75 : 0; // Fixed shipping rate
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "This is a demo. In a real store, you would proceed to payment.",
    });
  };

  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Review and manage your selected custom metal products
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-oswald font-bold mb-6">Cart Items</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 border-b border-gray-200 pb-6">
                      <div className="md:col-span-2 flex gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 object-cover rounded-sm"
                        />
                        <div>
                          <h3 className="font-oswald font-bold">{item.name}</h3>
                          <p className="text-metal-gray text-sm">Custom Metal Product</p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="flex items-center text-red-600 text-sm mt-2 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-medium">${item.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center border border-gray-300 rounded-sm">
                          <button 
                            className="px-3 py-1 border-r border-gray-300"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button 
                            className="px-3 py-1 border-l border-gray-300"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-lg font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-right">
                  <Button className="bg-metal-black text-white hover:bg-metal-darkgray" asChild>
                    <Link to="/shop">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-sm shadow-md">
                  <h2 className="text-2xl font-oswald font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">${calculateShipping().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (7.25%)</span>
                      <span className="font-medium">${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium w-full py-6"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-sm text-metal-gray mt-4 text-center">
                    Shipping and taxes are calculated at checkout. For custom sizes or specifications, please contact us.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-metal-gray mx-auto mb-6" />
              <h2 className="text-2xl font-oswald font-bold mb-4">Your cart is empty</h2>
              <p className="text-metal-gray mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium py-3 px-8" asChild>
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Cart;
