
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CompanyIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
              alt="Metal fabrication workshop"
              className="rounded-sm shadow-lg"
            />
          </div>
          <div>
            <span className="text-metal-gold uppercase font-medium tracking-wider">About CraftMasters</span>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold mt-2 mb-6">
              Expert Metal Fabrication Since 2003
            </h2>
            <p className="text-lg text-metal-gray mb-6">
              For over 20 years, CraftMasters Metal Fabricators has been delivering exceptional craftsmanship 
              and innovative solutions in custom metal fabrication. From residential gates and fences to 
              industrial metal projects, our skilled artisans combine traditional techniques with modern 
              technology to create durable, beautiful metal works.
            </p>
            <p className="text-lg text-metal-gray mb-8">
              Every project is handled with precision, expertise, and attention to detail, ensuring 
              results that exceed expectations. Our commitment to quality and customer satisfaction 
              has established us as a trusted partner for custom metal fabrication needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-metal-black text-white hover:bg-metal-darkgray font-medium" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
