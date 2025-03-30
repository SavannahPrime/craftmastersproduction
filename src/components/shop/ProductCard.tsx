
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  return (
    <div className="group bg-white rounded-sm shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <Link to={`/shop/${id}`} className="block overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <span className="text-xs text-metal-gray font-medium uppercase">{category}</span>
        <h3 className="font-oswald font-medium text-xl mt-1 mb-2">
          <Link to={`/shop/${id}`} className="text-metal-black hover:text-metal-gold transition-colors">
            {name}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <Button className="bg-metal-black text-white hover:bg-metal-darkgray">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
