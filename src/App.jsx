import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import OurMission from "./components/OurMission";
import Staff from "./components/Staff";
import Resources from "./components/Resources";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/contact"} element={<ContactScreen />} />
          <Route path="/OurMission" element={<OurMission />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
