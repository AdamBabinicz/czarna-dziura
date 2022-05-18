import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/CompanySection/CompanySection";
import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/CoursesSection/Courses";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Features from "../components/FeatureSection/Features";
import FreeCourse from "../components/FreeCoursSection/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsleter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
