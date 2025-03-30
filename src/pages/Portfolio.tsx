
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Custom Estate Entry Gate",
    category: "Residential",
    description: "Ornate double swing gate with automated opening system for a luxury estate.",
    imageBefore: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Commercial Building Railings",
    category: "Commercial",
    description: "Modern stainless steel railings for a corporate office building.",
    imageBefore: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Industrial Storage Solutions",
    category: "Industrial",
    description: "Custom fabricated metal shelving and storage systems for a manufacturing plant.",
    imageBefore: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Decorative Garden Fence",
    category: "Residential",
    description: "Artistic metal fence with custom floral patterns for a historic home garden.",
    imageBefore: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Retail Store Display Fixtures",
    category: "Commercial",
    description: "Custom metal display racks and fixtures for a high-end retail store.",
    imageBefore: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Manufacturing Equipment Guards",
    category: "Industrial",
    description: "Safety guards and enclosures for industrial machinery.",
    imageBefore: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    imageAfter: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Homeowner",
    content:
      "CraftMasters created a custom entrance gate for our home that exceeded all expectations. The craftsmanship and attention to detail are outstanding. We've received so many compliments from neighbors and visitors!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Interior Designer",
    content:
      "I've worked with CraftMasters on several projects, and they consistently deliver exceptional quality. Their ability to transform my design concepts into beautiful metal creations is why I keep coming back.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Commercial Developer",
    content:
      "For our office building renovation, CraftMasters provided custom railings and metal fixtures that perfectly matched our architectural vision. Professional, on time, and within budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Residential", "Commercial", "Industrial"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our craftsmanship through our completed projects and client success stories
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-metal-gold text-metal-black hover:bg-metal-gold/90" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-sm shadow-md overflow-hidden">
                <div className="relative">
                  <div className="group h-64 overflow-hidden">
                    <img
                      src={project.imageAfter}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white text-center px-4">
                        <p className="font-medium">View Project Details</p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-metal-gold text-metal-black text-sm font-medium py-1 px-3 rounded-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-oswald font-bold mb-2">{project.title}</h3>
                  <p className="text-metal-gray">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No projects found</h3>
              <p className="text-metal-gray">Try selecting a different category or check back later for new projects.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Client Success Stories</h2>
            <p className="text-lg text-metal-gray max-w-3xl mx-auto">
              Read about the experiences of our satisfied clients and their successful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-sm shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
