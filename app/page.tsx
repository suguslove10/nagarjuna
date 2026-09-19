import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import CurriculumMap from "./components/CurriculumMap";
import LivePractice from "./components/LivePractice";
import Calculator from "./components/Calculator";
import LearningOptions from "./components/LearningOptions";
import CourseComparison from "./components/CourseComparison";
import LiveDataFeed from "./components/LiveDataFeed";
import MentorProfile from "./components/MentorProfile";
import FAQ from "./components/FAQ";
import FinalCta from "./components/FinalCta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata = {
  title: "IND-GLOBAL Trade Academy | Institutional Orderflow Education for Indian Markets",
  description: "A structured curriculum in market microstructure, orderflow, and risk-managed execution — built for NSE, BSE, and global correlated markets, taught by mentors who trade what they teach.",
  keywords: "Indian trading academy, NSE trading course, BSE trading course, orderflow trading, DOM depth of market, Nifty futures course, trading mentorship India, market structure course"
};

export default function Home() {
  return (
    <main className="bg-[#FDFCF5] text-[#142B2E]">
      <Navbar />

      {/* 01 HERO */}
      <Hero />

      {/* 02 THE DIFFERENCE */}
      <Mission />

      {/* 03 LEARNING SYSTEM */}
      <CurriculumMap />

      {/* 04 PRACTICAL EXPERIENCE */}
      <LivePractice />

      {/* 05 POTENTIAL CALCULATOR */}
      <Calculator />

      {/* 06 PROGRAMS / PRICING */}
      <LearningOptions />

      {/* 07 CASE STUDY / COMPARISON */}
      <CourseComparison />

      {/* 08 LIVE DATA FEED */}
      <LiveDataFeed />

      {/* 09 MENTORS & RESULTS */}
      <MentorProfile />

      {/* 10 FAQ */}
      <FAQ />

      {/* 11 FINAL CTA */}
      <FinalCta />

      {/* 12 CONTACT & HQ */}
      <Contact />

      {/* 13 FOOTER */}
      <Footer />
    </main>
  );
}
