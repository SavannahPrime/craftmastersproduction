
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSlider from "@/components/home/HeroSlider";
import CompanyIntro from "@/components/home/CompanyIntro";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <PageLayout>
      <HeroSlider />
      <CompanyIntro />
      <FeaturedProducts />
      <ServicesShowcase />
      <Testimonials />
      <CallToAction />
    </PageLayout>
  );
};

export default Index;
