import './styles/index.scss'
import Bonus from './pages/bonus';
import Footer from './pages/footer';
import Gallery from './pages/galery';
import Guarantees from './pages/guarantees';
import Hero from './pages/hero';
import Indicators from './pages/indicators';
import Programs from './pages/programs';
import Useful from './pages/useful';

function App() {
  return (
    <div >
      <Hero />
      <Bonus />
      <Indicators />
      <Useful />
      <Gallery />
      <Programs />
      <Guarantees />
      <Footer />
    </div>
  );
}

export default App;
