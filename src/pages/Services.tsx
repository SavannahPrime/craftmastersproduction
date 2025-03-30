
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "gates",
    title: "Custom Metal Gates",
    description:
      "Our custom-designed gates combine security, durability, and beauty. From ornate entrance gates to modern designs, we create gates that enhance your property's aesthetics while providing functionality. Each gate is expertly crafted and can be automated for convenience.",
    features: [
      "Residential and commercial entry gates",
      "Sliding and swing gate designs",
      "Automated gate systems",
      "Security gates with access control",
      "Decorative and ornamental detailing"
    ],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fences",
    title: "Fences & Railings",
    description:
      "Enhance your property's security and appearance with our custom metal fences and railings. We design and fabricate fences and railings for residential, commercial, and industrial applications, combining strength with aesthetic appeal. From modern minimalist to intricate decorative styles, we craft each piece to your specifications.",
    features: [
      "Perimeter and security fencing",
      "Decorative garden and pool fencing",
      "Staircase and balcony railings",
      "ADA-compliant handrails",
      "Custom designs and patterns"
    ],
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "doors",
    title: "Metal Doors & Windows",
    description:
      "Our custom metal doors and windows offer security, durability, and distinctive style. We create doors and windows that meet your specific requirements, from traditional to contemporary designs. Our products feature quality hardware and can include decorative glass, artistic metalwork, and secure locking systems.",
    features: [
      "Security entry doors",
      "Custom steel windows",
      "Storefront and commercial doors",
      "Decorative screen doors",
      "Impact-resistant designs"
    ],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "industrial",
    title: "Industrial Fabrication",
    description:
      "Our industrial fabrication services deliver precision metal components and structures for commercial and industrial applications. With advanced equipment and skilled craftsmen, we handle projects of all sizes and complexity, ensuring quality workmanship that meets industry standards.",
    features: [
      "Structural steel fabrication",
      "Metal components for manufacturing",
      "Custom equipment and fixtures",
      "Architectural metalwork",
      "On-site installation"
    ],
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "welding",
    title: "Welding Services",
    description:
      "Our professional welding services cover a wide range of applications, from repairs to custom fabrication. Our certified welders are experienced in various welding techniques and can work with different metals, including steel, aluminum, and stainless steel. We prioritize quality and precision in every project.",
    features: [
      "MIG, TIG, and stick welding",
      "On-site welding services",
      "Structural welding",
      "Custom fabrication",
      "Repairs and modifications"
    ],
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "furniture",
    title: "Custom Metal Furniture",
    description:
      "Express your style with our custom metal furniture, designed and built to your specifications. We create unique pieces that combine functionality with artistic expression, from industrial-style tables to decorative accents. Our furniture is built to last, with attention to both aesthetics and durability.",
    features: [
      "Tables, chairs, and benches",
      "Shelving and storage solutions",
      "Decorative wall art and sculptures",
      "Indoor and outdoor furniture",
      "Commercial fixtures and displays"
    ],
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive metal fabrication services tailored to your specific needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-oswald font-bold mb-6">Expert Craftsmanship in Metal Fabrication</h2>
            <p className="text-lg text-metal-gray">
              At CraftMasters, we offer a wide range of metal fabrication services for both residential and commercial needs. 
              Our team of skilled craftsmen combines traditional techniques with modern technology to deliver 
              exceptional quality and durability in every project.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-sm shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-oswald font-bold mb-4">{service.title}</h3>
                  <p className="text-metal-gray mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-metal-gold rounded-full mt-2 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium" asChild>
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-oswald font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-metal-gray max-w-2xl mx-auto mb-8">
            Can't find exactly what you need? We specialize in custom metal fabrication 
            projects tailored to your specific requirements.
          </p>
          <Button className="bg-metal-black text-white hover:bg-metal-darkgray py-3 px-8 font-medium" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
