import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TrustBar from "../components/TrustBar";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForms from "../components/ContactForms";
import Footer from "../components/Footer";
import StickyEmergencyWidget from "../components/StickyEmergencyWidget";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <ServicesSection />
    <StickyEmergencyWidget />
    <AboutSection />
    <TrustBar />
    <TestimonialsSection />
    <ContactForms />
    <Footer />
  </Layout>
);

export default IndexPage;

