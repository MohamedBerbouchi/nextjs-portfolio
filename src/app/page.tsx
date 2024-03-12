import Menu from '@/components/menu';
import AboutMe from '../components/about-me';
import Footer from '../components/footer';
import Hero from '../components/hero';
import { TracingBeam } from '../components/ui/tracing-beam';
export default function Home() {
  return (
    <TracingBeam>
      <div className="">
        <main className='px-10  '>
          <Menu />
          <Hero />
          <AboutMe />

          <Footer />
        </main>

      </div>
    </TracingBeam>

  );
} 
