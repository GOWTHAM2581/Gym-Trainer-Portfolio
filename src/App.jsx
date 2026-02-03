import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TrainerGallery from './components/TrainerGallery';
import CompetitionAchievements from './components/CompetitionAchievements';
import ChiefGuest from './components/ChiefGuest';
import ClientTransformations from './components/ClientTransformations';
import CompetitionGuiding from './components/CompetitionGuiding';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />
      <Hero />
      <About />
      {/* <TrainerGallery /> */}
      <CompetitionAchievements />
      <ChiefGuest />
      <ClientTransformations />
      <CompetitionGuiding />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
