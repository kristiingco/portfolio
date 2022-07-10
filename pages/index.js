import Head from "next/head";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroBanner from "../components/HeroBanner";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-x-hidden">
        <NavBar />
        <HeroBanner />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </main>
    </div>
  );
}
