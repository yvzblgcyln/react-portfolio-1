import About from "./components/about/About";
import Demo from "./components/demo/Demo";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
