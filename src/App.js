// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import LoginSignup from "./components/LoginSignup"; 
// import UploadForm from "./components/UploadForm"; 
// import PredictionResult from "./components/PredictionResult"; 
// import Home from "./pages/Home";
// import Landslide from "./pages/Landslide";
// import Flood from "./pages/Flood";
// import Fire from "./pages/Fire";
// import Deforestation from "./pages/Deforestation";
// import "./assets/styles.css"; // Import styles

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   // Toggle Dark Mode
//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   // Save Dark Mode preference
//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <Router>
//       {/* Pass Dark Mode State & Toggle to Navbar */}
//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<LoginSignup />} />
//           <Route path="/UploadForm" element={<UploadForm />} />
//           <Route path="/results" element={<PredictionResult />} />
//           <Route path="/landslide" element={<Landslide />} />
//           <Route path="/flood" element={<Flood />} />
//           <Route path="/fire" element={<Fire />} />
//           <Route path="/deforestation" element={<Deforestation />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";
import UploadForm from "./components/UploadForm";
import PredictionResult from "./components/PredictionResult";
import Home from "./pages/Home";
import Landslide from "./pages/Landslide";
import Flood from "./pages/Flood";
import Fire from "./pages/Fire";
import Deforestation from "./pages/Deforestation";
import "./assets/styles.css"; // Import styles

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  // Apply Dark Mode to the HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark-mode");
    } else {
      htmlElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/UploadForm" element={<UploadForm />} />
          <Route path="/results" element={<PredictionResult />} />
          <Route path="/landslide" element={<Landslide />} />
          <Route path="/flood" element={<Flood />} />
          <Route path="/fire" element={<Fire />} />
          <Route path="/deforestation" element={<Deforestation />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
