
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Homeowner",
    content:
      "CraftMasters created a custom entrance gate for our home that exceeded all expectations. The craftsmanship and attention to detail are outstanding. We've received so many compliments from neighbors and visitors!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Interior Designer",
    content:
      "I've worked with CraftMasters on several projects, and they consistently deliver exceptional quality. Their ability to transform my design concepts into beautiful metal creations is why I keep coming back.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Commercial Developer",
    content:
      "For our office building renovation, CraftMasters provided custom railings and metal fixtures that perfectly matched our architectural vision. Professional, on time, and within budget.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">What Our Clients Say</h2>
          <p className="text-lg text-metal-gray max-w-3xl mx-auto">
            We take pride in our work and the satisfaction of our customers. 
            Here's what some of them have to say about working with CraftMasters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-metal-gold text-metal-gold"
                  />
                ))}
              </div>
              <p className="text-metal-gray mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-oswald font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-metal-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
