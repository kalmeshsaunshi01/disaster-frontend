// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../assets/styles.css"; // Import CSS

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     try {
//       const loggedInUser = localStorage.getItem("user");
      
//       if (loggedInUser && loggedInUser !== "undefined") { 
//         setUser(JSON.parse(loggedInUser));
//       } else {
//         setUser(null); // Ensure user is null if data is invalid
//       }
//     } catch (error) {
//       console.error("Error parsing user data from localStorage:", error);
//       setUser(null);
//     }
//   }, []);
  

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       localStorage.removeItem("user"); // Clear user data
//       window.dispatchEvent(new Event("userUpdate")); // Update UI
//       navigate("/login"); // Redirect to login
//     }
//   };
  

//   return (
//     <nav className="navbar">
//       <h2>Disaster Detection</h2>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#features">Features</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div className="nav-actions">
//         {user ? (
//           <button onClick={handleLogout} className="logout-btn">
//             Logout
//           </button>
//         ) : (
//           <Link to="/Login" className="login-btn">
//             Login / Signup
//           </Link>
//         )}
        
//         <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/styles.css"; // Import CSS

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem("user");

      if (loggedInUser && loggedInUser !== "undefined") {
        setUser(JSON.parse(loggedInUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("userUpdate"));
      navigate("/login");
    }
  };

  // Check if the current page is Home
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <h2>Disaster Detection</h2>

      <ul>
        <li><Link to="/">Home</Link></li>

        {isHomePage && (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            
          </>
        )}
      </ul>

      <div className="nav-actions">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          isHomePage && (
            <Link to="/login" className="login-btn">
              Login / Signup
            </Link>
          )
        )}

        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
