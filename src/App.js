import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import './components/HomePage.css';


// Import your module components
import Reimaging from './components/Reimaging';
import InstallingSoftware from './components/InstallingSoftware';
import PatchingHub from './components/PatchingHub';
import CreatingLogins from './components/CreatingLogins';
import CableMngm from './components/CableMngm';
import KillDisk from './components/KillDisk';
import Ticketing from './components/Ticketing';
import ReplacingSysParts from './components/ReplacingSysParts';
import SortTest from './components/SortTest';
import Crimping from './components/Crimping';
import WallToWall from './components/WallToWall';
import Reboot from './components/Reboot';
import NetworkFile from './components/NetworkFile';
import SCCM from './components/Sccm';
import ActiveDirectory from './components/ActiveDirectory';
import SettingUpMac from './components/SettingUpMac';
import Storage from './components/Storage';
import RemovingParts from './components/RemovingParts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideNavBar />
        <div className="main-content">
          <Routes>
            <Route path="/reimaging" element={<Reimaging />} />
            <Route path="/installing-software" element={<InstallingSoftware />} />
            <Route path="/patching-hub" element={<PatchingHub />} />
            <Route path="/creating-logins" element={<CreatingLogins />} />
            <Route path="/cable-management" element={<CableMngm />} />
            <Route path="/kill-disk" element={<KillDisk />} />
            <Route path="/ticketing" element={<Ticketing />} />
            <Route path="/replacing-system-parts" element={<ReplacingSysParts />} />
            <Route path="/sorting-testing" element={<SortTest />} />
            <Route path="/crimping" element={<Crimping />} />
            <Route path="/wall-to-wall" element={<WallToWall />} />
            <Route path="/reboot" element={<Reboot />} />
            <Route path="/network-file" element={<NetworkFile />} />
            <Route path="/sccm" element={<SCCM />} />
            <Route path="/active-directory" element={<ActiveDirectory />} />
            <Route path="/setting-up-mac" element={<SettingUpMac />} /> 
            <Route path="/storage" element={<Storage />} />
            <Route path="/removing-parts" element={<RemovingParts />} />
            <Route path="/" element={<HomePage />} /> {/* Default route or main page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="flexbox-item">
        <img src="/HomePage/Richard.jpg" alt="Image 1" />
        <div className="description-box1">Richard Lopez<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>"Sir ako din po malalate mag re-render nalang po ako"</div>
      </div>
      <div className="flexbox-item">
        <img src="/HomePage/Jong.jpg" alt="Image 2" />
        <div className="description-box1">Mark Jhon Empas<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>"Ikamada mo na yan, Ako sa push cart"</div>
      </div>
      <div className="flexbox-item">
        <img src="/HomePage/Gab.jpg" alt="Image 3" />
        <div className="description-box1">Angelo Gabarda<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>BPO:Welterweight Champion<br/><br/>ipconfig /force<br/><br/>"Knowledge is power,<br/>Pero mali yon"</div>
      </div>
      <div className="flexbox-item">
        <img src="/HomePage/Mantes.jpg" alt="Image 4" />
        <div className="description-box1">Reynold Mantes<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>"Pandesal a day keeps the doctor away"<br/></div>
      </div>
      <div className="flexbox-item">
        <img src="/HomePage/Lego.jpg" alt="Image 5" />
        <div className="description-box1">Jhon Carlos Lego<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>"Sir pwede po mag midshift if hindi po mag re-render nalang po ako"<br/></div>
      </div>
      <div className="flexbox-item">
        <img src="/HomePage/Harry.jpg" alt="Image 6" />
        <div className="description-box1">Harry Lugmao<br/> <br/>Bachelor of Science in Computer Science<br/><br/>St. Clare College of Caloocan<br/><br/>"Gab upo"<br/></div>
      </div>
    </div>
  );
};

export default App;
