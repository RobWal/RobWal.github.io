import './App.css';
import Header from './components/organisms/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/organisms/Footer';
import HomeScreen from './components/pages/HomeScreen';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import ProjectInformation from './components/pages/ProjectInformation';
import FishingOdds from './components/pages/FishingOdds';
import CrabPots from './components/pages/CrabPots';
import CatchTheCash from './components/pages/CatchTheCash';
import CommunityCenterChecklist from './components/pages/CommunityCenterChecklist';
import StardewValleyFishing from './components/pages/StardewValleyFishing';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
            <Routes>
              <Route path="/" element={<HomeScreen />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/projects" element={<ProjectInformation />}/>
              <Route path="/projects/fishing-odds" element={<FishingOdds />}/>
              <Route path="/projects/catch-the-cash" element={<CatchTheCash />}/>
              <Route path="/projects/crab-pots" element={<CrabPots />}/>
              <Route path="/projects/stardew-valley-fishing" element={<StardewValleyFishing />}/>
              <Route path="/projects/community-center-checklist" element={<CommunityCenterChecklist />}/>
              <Route path="/*" element={<PageNotFound />}/>
            </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;