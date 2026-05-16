import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import DualMission from "../components/site/DualMission";
import Process from "../components/site/Process";
import Services from "../components/site/Services";
import Lab from "../components/site/Lab";
import MentorNote from "../components/site/MentorNote";
import Footer from "../components/site/Footer";

export default function Verify() {
  return (
    <div className="min-h-screen bg-offwhite text-navy-900" data-testid="verify-page">
      <Navbar />
      <main>
        <Hero />
        <DualMission />
        <Process />
        <Services />
        <Lab />
        <MentorNote />
      </main>
      <Footer />
    </div>
  );
}