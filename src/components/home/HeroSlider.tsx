
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Custom Metal Gates & Fences",
    description: "Handcrafted metal gates and fences that combine beauty, security, and durability.",
    buttonText: "Shop Gates",
    buttonLink: "/shop?category=gates",
  },
  {
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Industrial Metal Fabrication",
    description: "Expert metal fabrication services for commercial and industrial applications.",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Custom Metal Solutions",
    description: "Bring your vision to life with our custom metalwork design and fabrication services.",
    buttonText: "Request a Quote",
    buttonLink: "/contact",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-custom h-full flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl animate-fade-in">
              {slide.description}
            </p>
            <Button
              className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-bold py-3 px-8 text-lg animate-fade-in"
              asChild
            >
              <a href={slide.buttonLink}>{slide.buttonText}</a>
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-metal-gold" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
