import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import COD from "./COD/COD";
import OW from "./OW/OW";
import RL from "./RL/RL";
import CSGO from "./CSGO/CSGO";
import LOL from "./LOL/LOL";
import Smash from "./Smash/Smash";
import Valorant from "./Valorant/Valorant";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Teams from "./Teams/Teams";
import Streams from "./Streams/Streams";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/teams/call-of-duty" element={<COD />} />
          <Route path="/teams/overwatch" element={<OW />} />
          <Route path="/teams/rocket-league" element={<RL />} />
          <Route path="/teams/csgo" element={<CSGO />} />
          <Route path="/teams/league-of-legends" element={<LOL />} />
          <Route path="/teams/smash" element={<Smash />} />
          <Route path="/teams/valorant" element={<Valorant />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/streams" element={<Streams/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
