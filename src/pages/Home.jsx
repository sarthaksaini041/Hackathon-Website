import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import Schedule from '../components/sections/Schedule';
import Prizes from '../components/sections/Prizes';
import Sponsors from '../components/sections/Sponsors';
import Gallery from '../components/sections/Gallery';
import FAQ from '../components/sections/FAQ';
import Registration from '../components/sections/Registration';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistics />
      <Schedule />
      <Prizes />
      <Sponsors />
      <Gallery />
      <FAQ />
      <Registration />
    </main>
  );
}
