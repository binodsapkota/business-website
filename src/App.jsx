import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-16">{/* padding top for fixed navbar height */}
        <Hero />
        <About />
        <Services />
        <Portfolio/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
