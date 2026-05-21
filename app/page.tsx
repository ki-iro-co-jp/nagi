import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import AdditionalSupport from '@/components/AdditionalSupport';
import Greeting from '@/components/Greeting';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box component="main">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <AdditionalSupport />
      <Greeting />
      <Footer />
    </Box>
  );
}
