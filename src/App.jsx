import Featrues from './components/Featrues';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HighLights from './components/HighLights';
import HowItWork from './components/HowItWork';
import Model from './components/Model';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Featrues />
      <HowItWork />
      <Footer />
    </main>
  );
};

export default App;
