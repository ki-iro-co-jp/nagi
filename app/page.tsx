import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import AdditionalSupport from '@/components/AdditionalSupport';
import Greeting from '@/components/Greeting';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <AdditionalSupport />
      <Greeting />
      <Footer />
    </>
  );
}