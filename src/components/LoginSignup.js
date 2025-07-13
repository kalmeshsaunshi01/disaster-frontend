// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import "../assets/styles.css";

// // const LoginSignup = () => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [formData, setFormData] = useState({ email: "", password: "", name: "" });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const toggleForm = () => {
// //     setIsLogin(!isLogin);
// //     setError("");
// //   };

// //   const handleChange = (event) => {
// //     setFormData({ ...formData, [event.target.name]: event.target.value });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const url = `http://127.0.0.1:5000/${isLogin ? "login" : "signup"}`;
// //       const response = await axios.post(url, formData, { headers: { "Content-Type": "application/json" } });

// //       if (response.data.success) {
// //         localStorage.setItem("token", response.data.token);
// //         navigate("/dashboard"); // Redirect to dashboard after login
// //       } else {
// //         setError(response.data.message);
// //       }
// //     } catch (error) {
// //       setError("Error processing request. Try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2>{isLogin ? "Login" : "Signup"}</h2>
// //       <form onSubmit={handleSubmit}>
// //         {!isLogin && (
// //           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
// //         )}
// //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// //         <button type="submit" disabled={loading}>{loading ? "Processing..." : isLogin ? "Login" : "Signup"}</button>
// //       </form>
// //       {error && <p className="error-message">{error}</p>}
// //       <p onClick={toggleForm} className="toggle-link">
// //         {isLogin ? "New here? Signup" : "Already have an account? Login"}
// //       </p>
// //     </div>
// //   );
// // };

// // export default LoginSignup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css";

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isSignup ? "http://127.0.0.1:5000/signup" : "http://127.0.0.1:5000/login";
    
//     const userData = isSignup
//       ? { name, email, password }
//       : { email, password };

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();
//       if (data.success) {
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//         <form onSubmit={handleSubmit}>
//           {isSignup && <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />}
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//         </form>
//         <p>
//           {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//           <span onClick={() => setIsSignup(!isSignup)} style={{ cursor: "pointer", color: "blue" }}>
//             {isSignup ? "Login" : "Sign Up"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css";

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const endpoint = isSignup ? "http://127.0.0.1:5000/signup" : "http://127.0.0.1:5000/login";
//     const userData = isSignup
//       ? { name: formData.name, email: formData.email, password: formData.password }
//       : { email: formData.email, password: formData.password };

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem("user", JSON.stringify(data.user));

//         // 🔥 Dispatch event to update UI instantly
//         window.dispatchEvent(new Event("userUpdate"));

//         navigate("/");
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Something went wrong! Please try again.");
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>
//         <p>
//           {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//           <span onClick={() => setIsSignup(!isSignup)} className="toggle-link">
//             {isSignup ? "Login" : "Sign Up"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css";

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const endpoint = isSignup ? "http://127.0.0.1:5000/signup" : "http://127.0.0.1:5000/login";
//     const userData = isSignup
//       ? { name: formData.name, email: formData.email, password: formData.password }
//       : { email: formData.email, password: formData.password };

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem("user", JSON.stringify(data.user));

//         // 🔥 Dispatch event to update UI instantly
//         window.dispatchEvent(new Event("userUpdate"));

//         navigate("/");
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Something went wrong! Please try again.");
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>
//         <p>
//           {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//           <span onClick={() => setIsSignup(!isSignup)} className="toggle-link">
//             {isSignup ? "Login" : "Sign Up"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isSignup? "https://disaster-backend-1.onrender.com/signup" : "https://disaster-backend-1.onrender.com/login";

    const userData = isSignup
      ? { name: formData.name, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("userUpdate"));
      
        if (isSignup) {
          alert("Signup successful! Please log in.");
          setIsSignup(false); // Switch to login form
        } else {
          alert("Login successful! Redirecting...");
          navigate("/"); // Redirect to home after login
        }
      }
      
    } catch (err) {
      setError("Something went wrong! Please try again.");
      alert("Something went wrong! Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)} className="toggle-link">
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
