import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import OurMission from "./screens/OurMission.jsx";
import Staff from "./screens/Staff";
import Resources from "./screens/Resources.jsx";
import Services from "./screens/Services";
import AboutScreen from "./screens/AboutScreen";
import MediaScreen from "./screens/MediaScreen.jsx";
import MembershipScreen from "./screens/MembershipScreen.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/about"} element={<AboutScreen />} />
          <Route path={"/contact"} element={<ContactScreen />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<MediaScreen />} />
          <Route path="/membership" element={<MembershipScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
