
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";

// Sample product data
const allProducts = [
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
  },
  {
    id: 5,
    name: "Automatic Driveway Gate",
    price: 2899.99,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    category: "Gates"
  },
  {
    id: 6,
    name: "Ornamental Iron Fence",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    category: "Fences"
  },
  {
    id: 7,
    name: "Stainless Steel Balcony Railing",
    price: 1399.99,
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    category: "Railings"
  },
  {
    id: 8,
    name: "Industrial Metal Staircase",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    category: "Furniture"
  }
];

const categories = ["All", "Gates", "Fences", "Railings", "Doors", "Furniture"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Shop Our Products</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our collection of handcrafted metal products, from custom gates to decorative railings.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <Button 
              className="flex items-center md:hidden mb-4"
              variant="outline"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <div className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-metal-gold text-metal-black hover:bg-metal-gold/90" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <span className="mr-2 text-metal-gray">Sort by:</span>
              <select
                className="border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-metal-gold"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No products found</h3>
              <p className="text-metal-gray">Try selecting a different category or check back later for new products.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;
