
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "../shop/ProductCard";

const products = [
  {
    id: 1,
    name: "Custom Iron Garden Gate",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
    category: "Gates"
  },
  {
    id: 2,
    name: "Decorative Metal Railing",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    category: "Railings"
  },
  {
    id: 3,
    name: "Steel Security Door",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    category: "Doors"
  },
  {
    id: 4,
    name: "Custom Metal Furniture",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
    category: "Furniture"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Featured Products</h2>
          <p className="text-lg text-metal-gray max-w-3xl mx-auto">
            Discover our most popular custom metal fabrication products,
            handcrafted with precision and artistic detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium py-3 px-8" asChild>
            <Link to="/shop">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
