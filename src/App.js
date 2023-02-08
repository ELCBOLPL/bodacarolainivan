import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { MapContainer,TileLayer} from 'react-leaflet';
// import L from 'leaflet';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Hero from "./components/Hero/Hero";
// import CountdownTimer from './components/Clock/CountdownTimer';
import './App.css';
// import LeafletGeocoder from "../src/components/LeafletGeocoder";
// import leafletControlGeocoder from 'leaflet-control-geocoder'
// import leafletControlGeocoder from 'leaflet-control-geocoder'
function App() {
  // const THREE_DAYS_IN_MS = 205 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  // const position = [25.782230,  -100.237325]
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <>
          
            <GlobalStyles />
            <Navbar />
            <Home />
            {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletGeocoder/>
    </MapContainer> */}
            <Projects />
            <About />
            <ParallaxComponent />
            <Technologies />
            <Hero/>
            <Footer />
          </>
        </ThemeProvider>
      </Router>
  );
}

// let defaultIcon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
// });
// L.Marker.prototype.options.icon = defaultIcon;
export default App;
