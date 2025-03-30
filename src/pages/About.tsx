
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">About CraftMasters</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experts in custom metal fabrication with over 20 years of experience
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-6">Our Story</h2>
              <p className="text-metal-gray mb-4">
                Founded in 2003, CraftMasters Metal Fabricators began as a small workshop with a passion for quality craftsmanship and innovative metal designs. What started as a team of three skilled artisans has grown into a full-service fabrication company with a reputation for excellence throughout the region.
              </p>
              <p className="text-metal-gray mb-4">
                Our journey has been defined by a commitment to combining traditional metalworking techniques with modern technology and design principles. Over the years, we've expanded our services and capabilities while maintaining our dedication to personalized service and attention to detail.
              </p>
              <p className="text-metal-gray">
                Today, CraftMasters is proud to serve residential, commercial, and industrial clients with custom metal solutions that meet the highest standards of quality and durability.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                alt="CraftMasters workshop"
                className="rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Mission & Values</h2>
            <p className="text-lg text-metal-gray max-w-3xl mx-auto">
              The principles that guide our work and company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-md">
              <div className="h-16 w-16 bg-metal-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-metal-black text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-oswald font-bold mb-4 text-center">Quality Craftsmanship</h3>
              <p className="text-metal-gray text-center">
                We are committed to excellence in every project, using the finest materials and techniques to create metal works that stand the test of time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md">
              <div className="h-16 w-16 bg-metal-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-metal-black text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-oswald font-bold mb-4 text-center">Innovation</h3>
              <p className="text-metal-gray text-center">
                We continuously explore new designs, technologies, and methods to provide innovative solutions that meet our clients' evolving needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md">
              <div className="h-16 w-16 bg-metal-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-metal-black text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-oswald font-bold mb-4 text-center">Customer Satisfaction</h3>
              <p className="text-metal-gray text-center">
                We prioritize clear communication, collaboration, and a client-centered approach to ensure we exceed expectations on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80"
                alt="CraftMasters team"
                className="rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-6">Why Choose CraftMasters</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-metal-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Experience & Expertise</h3>
                    <p className="text-metal-gray">
                      Our team brings over two decades of experience in metal fabrication, with specialized skills in various techniques and materials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-metal-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Custom Design Process</h3>
                    <p className="text-metal-gray">
                      We work closely with clients to transform their ideas into reality, with a collaborative design process that ensures your vision is realized.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-metal-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Quality Materials</h3>
                    <p className="text-metal-gray">
                      We use only premium materials that provide durability, weather resistance, and long-lasting beauty for all our projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-metal-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Comprehensive Services</h3>
                    <p className="text-metal-gray">
                      From initial design to fabrication and installation, we provide end-to-end solutions for all your metal fabrication needs.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium mt-8" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-metal-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your custom metal fabrication needs and get a free consultation.
          </p>
          <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium py-3 px-8 text-lg" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
