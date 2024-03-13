import Menu from '@/components/menu';
import AboutMe from '../components/about-me';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { TracingBeam } from '../components/ui/tracing-beam';
export default function Home() {
  return (
    <TracingBeam>
      <div className="">
        <main className='px-10  '>
          <Menu />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>

      </div>
    </TracingBeam>

  );
} 
