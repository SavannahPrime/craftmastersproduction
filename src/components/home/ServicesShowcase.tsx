
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom Metal Gates",
    description:
      "Our custom gates combine beauty and security, featuring intricate designs and precision engineering.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    link: "/services#gates"
  },
  {
    id: 2,
    title: "Fences & Railings",
    description:
      "Enhance your property with our elegant fences and railings, built for durability and aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    link: "/services#railings"
  },
  {
    id: 3,
    title: "Industrial Fabrication",
    description:
      "Specialized metal solutions for commercial and industrial applications with precision engineering.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    link: "/services#industrial"
  }
];

const ServicesShowcase = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Expert Services</h2>
          <p className="text-lg text-metal-gray max-w-3xl mx-auto">
            CraftMasters offers comprehensive metal fabrication services tailored to both
            residential and commercial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-md group overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-oswald font-bold mb-3">{service.title}</h3>
                <p className="text-metal-gray mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-metal-gold font-medium hover:underline"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-metal-black text-white hover:bg-metal-darkgray py-3 px-8 font-medium" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
