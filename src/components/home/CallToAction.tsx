
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-metal-black text-white">
      <div 
        className="container-custom relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="py-16 px-6 md:py-20 md:px-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold mb-6">
            Ready to Transform Your Space with Custom Metalwork?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Whether you need a custom gate, railing, or industrial fabrication, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium py-3 px-8 text-lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-medium py-3 px-8 text-lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
