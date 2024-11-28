import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors"
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MusicSchoolTestimonial />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
    </main>
  );
}
