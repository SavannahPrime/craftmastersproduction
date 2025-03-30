
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting CraftMasters. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <section className="bg-metal-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team to discuss your custom metal fabrication needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-sm shadow-md text-center">
              <div className="w-16 h-16 bg-metal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-metal-black" />
              </div>
              <h3 className="text-xl font-oswald font-bold mb-3">Call Us</h3>
              <p className="text-metal-gray mb-4">Have a quick question? Give us a call.</p>
              <a href="tel:+15551234567" className="text-xl font-medium text-metal-black hover:text-metal-gold transition-colors">
                (555) 123-4567
              </a>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md text-center">
              <div className="w-16 h-16 bg-metal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-metal-black" />
              </div>
              <h3 className="text-xl font-oswald font-bold mb-3">Email Us</h3>
              <p className="text-metal-gray mb-4">Send us an email for any detailed inquiries.</p>
              <a href="mailto:info@craftmasters.com" className="text-xl font-medium text-metal-black hover:text-metal-gold transition-colors">
                info@craftmasters.com
              </a>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md text-center">
              <div className="w-16 h-16 bg-metal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-metal-black" />
              </div>
              <h3 className="text-xl font-oswald font-bold mb-3">Visit Us</h3>
              <p className="text-metal-gray mb-4">Come to our workshop and showroom.</p>
              <p className="text-xl font-medium text-metal-black">
                1234 Metalworks Ave.<br />
                Craftville, CA 90210
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-metal-gold"
                    >
                      <option value="">Select a Service</option>
                      <option value="Gates">Custom Gates</option>
                      <option value="Fences">Fences & Railings</option>
                      <option value="Doors">Metal Doors & Windows</option>
                      <option value="Industrial">Industrial Fabrication</option>
                      <option value="Welding">Welding Services</option>
                      <option value="Furniture">Custom Metal Furniture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 font-medium py-3 px-8 w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-6">Our Location</h2>
              {/* Google Maps iframe placeholder */}
              <div className="h-96 bg-gray-200 mb-6 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740658098!2d-118.69192119136834!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CraftMasters Location"
                ></iframe>
              </div>
              <h3 className="text-xl font-oswald font-bold mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-metal-gold mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Monday - Friday</h4>
                    <p className="text-metal-gray">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-metal-gold mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Saturday</h4>
                    <p className="text-metal-gray">9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-metal-gold mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Sunday</h4>
                    <p className="text-metal-gray">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
