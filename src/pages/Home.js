// import React from "react";
// import "../assets/styles.css"; // Import CSS

// const HomePage = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section id="home" className="hero">
//         <div className="hero-overlay">
//           <h1>Disaster Detection & Mitigation</h1>
//           <p>AI-powered disaster prediction to safeguard communities.</p>
//           <button>Get Started</button>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="about">
//         <h2>About Us</h2>
//         <p>
//           Our mission is to provide an advanced AI-powered disaster detection system to help communities respond quickly to potential disasters.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="features">
//         <h2>Features</h2>
//         <div className="features-container">
//           <div className="feature-box">
//             <h3>Real-Time Alerts</h3>
//             <p>Get instant notifications about potential disasters in your area.</p>
//           </div>
//           <div className="feature-box">
//             <h3>AI-Powered Predictions</h3>
//             <p>Advanced algorithms analyze data to predict disasters accurately.</p>
//           </div>
//           <div className="feature-box">
//             <h3>Community Support</h3>
//             <p>Engage with a network of people working together for disaster response.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="contact">
//         <h2>Contact Us</h2>
//         <p>Have questions? Get in touch with us!</p>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css"; // Import CSS

// const HomePage = ({ darkMode, toggleDarkMode }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUser = () => {
//       const loggedInUser = localStorage.getItem("user");
//       if (loggedInUser && loggedInUser !== "undefined") {
//         try {
//           setUser(JSON.parse(loggedInUser));
//         } catch (error) {
//           console.error("Error parsing user JSON:", error);
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//       }
//     };

//     checkUser();

//     // Listen for changes in localStorage (for login updates)
//     window.addEventListener("storage", checkUser);

//     return () => {
//       window.removeEventListener("storage", checkUser);
//     };
//   }, []);
  
  

//   const handleGetStarted = () => {
//     if (user) {
//       navigate("/UploadForm"); // Go to Image Upload Page
//     } else {
//       navigate("/login"); // Go to Login Page
//     }
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section id="home" className="hero">
//         <div className="hero-overlay">
//           <h1>Disaster Detection & Mitigation</h1>
//           <p>AI-powered disaster prediction to safeguard communities.</p>
//           <button 
//             onClick={handleGetStarted}
//             className={`mt-5 px-5 py-2 rounded text-white ${
//               user ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="about">
//         <h2>About Us</h2>
//         <p>
//           Our mission is to provide an advanced AI-powered disaster detection system to help communities respond quickly to potential disasters.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="features">
//         <h2>Features</h2>
//         <div className="features-container">
//           <div className="feature-box">
//             <h3>Real-Time Alerts</h3>
//             <p>Get instant notifications about potential disasters in your area.</p>
//           </div>
//           <div className="feature-box">
//             <h3>AI-Powered Predictions</h3>
//             <p>Advanced algorithms analyze data to predict disasters accurately.</p>
//           </div>
//           <div className="feature-box">
//             <h3>Community Support</h3>
//             <p>Engage with a network of people working together for disaster response.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="contact">
//         <h2>Contact Us</h2>
//         <p>Have questions? Get in touch with us!</p>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css"; // Import CSS

// const HomePage = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/api/auth/user", {
//           method: "GET",
//           credentials: "include", // ✅ Allows cookies to be sent
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
    
//         if (!response.ok) {
//           console.error("Error fetching user:", response.status);
//           setUser(null);
//           return;
//         }
    
//         const data = await response.json();
//         if (data.success) {
//           setUser(data.user);
//         } else {
//           setUser(null);
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setUser(null);
//       }
//     };
    
    
    

//     fetchUser();
//   }, []);

//   const handleGetStarted = () => {
//     if (user) {
//       navigate("/UploadForm");
//     } else {
//       navigate("/login");
//     }
//   };


//   return (
//     <div>
//       {/* Hero Section */}
//       <section id="home" className="hero">
//         <div className="hero-overlay">
//           <h1>Disaster Detection & Mitigation</h1>
//           <p>AI-powered disaster prediction to safeguard communities.</p>
//           <button 
//             onClick={handleGetStarted}
//             className={user ? "btn-primary" : "btn-disabled"}
//           >
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="about">
//         <h2>About Us</h2>
//         <p>
//           Our mission is to provide an advanced AI-powered disaster detection system to help communities respond quickly to potential disasters.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="features">
//         <h2>Features</h2>
//         <div className="features-container">
//           <div className="feature-box">
//             <h3>Real-Time Alerts</h3>
//             <p>Get instant notifications about potential disasters in your area.</p>
//           </div>
//           <div className="feature-box">
//             <h3>AI-Powered Predictions</h3>
//             <p>Advanced algorithms analyze data to predict disasters accurately.</p>
//           </div>
//           <div className="feature-box">
//             <h3>Community Support</h3>
//             <p>Engage with a network of people working together for disaster response.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="contact">
//         <h2>Contact Us</h2>
//         <p>Have questions? Get in touch with us!</p>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 // Import Footer
import "../assets/styles.css"; // Import CSS

const HomePage = ({ darkMode, toggleDarkMode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser && loggedInUser !== "undefined") {
        try {
          setUser(JSON.parse(loggedInUser));
        } catch (error) {
          console.error("Error parsing user JSON:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    // Initial check
    checkUser();

    // Listen for changes in localStorage
    const handleStorageChange = () => checkUser();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate("/UploadForm"); // Go to Image Upload Page
    } else {
      navigate("/login"); // Go to Login Page
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <h1>Disaster Detection & Mitigation</h1>
          <p>AI-powered disaster prediction to safeguard communities.</p>
          <button onClick={handleGetStarted} className="btn-primary">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Our Platform</h2>
        <p>
          Our platform provides real-time disaster prediction, mitigation strategies, 
          and graphical insights to help individuals and organizations respond effectively.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>🌍 Disaster Prediction</h3>
            <p>Using AI models to predict upcoming disasters based on real-time data.</p>
          </div>
          <div className="feature-item">
            <h3>⚡ Disaster Mitigation</h3>
            <p>Providing actionable mitigation strategies to minimize damage.</p>
          </div>
          <div className="feature-item">
            <h3>📊 Graphical Representation</h3>
            <p>Interactive charts and graphs to visualize disaster trends and patterns.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
