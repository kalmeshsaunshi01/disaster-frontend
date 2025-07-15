// import React, { useState } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import "../assets/styles.css"; // External CSS

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // ✅ Ensure Each Disaster Has 10+ Mitigation Strategies
// const disasterMitigations = {
//   earthquake: [
//     "Secure heavy furniture and appliances.",
//     "Develop an emergency communication plan.",
//     "Reinforce building structures.",
//     "Identify safe spots indoors.",
//     "Stock emergency supplies (food, water, medicine).",
//     "Train people on first aid and evacuation procedures.",
//     "Use shock-absorbing materials in construction.",
//     "Avoid building in seismic zones.",
//     "Install seismic sensors for early warnings.",
//     "Regularly inspect and upgrade old buildings."
//   ],
//   flood: [
//     "Build flood barriers and levees.",
//     "Install proper drainage systems.",
//     "Develop an early warning system.",
//     "Promote afforestation in flood-prone areas.",
//     "Construct elevated buildings in flood zones.",
//     "Maintain and clean drainage systems regularly.",
//     "Implement water retention areas.",
//     "Encourage sustainable water management.",
//     "Use permeable surfaces for urban planning.",
//     "Ensure emergency response teams are well-trained."
//   ],
//   landslide: [
//     "Avoid construction on steep slopes.",
//     "Improve drainage systems.",
//     "Plant vegetation to reduce erosion.",
//     "Monitor slopes for warning signs.",
//     "Use retaining walls to stabilize slopes.",
//     "Implement zoning laws to prevent risky construction.",
//     "Reinforce slopes with concrete or steel structures.",
//     "Divert water flow to reduce soil saturation.",
//     "Create landslide hazard maps.",
//     "Educate communities on evacuation procedures."
//   ],
//   deforestation: [
//     "Implement afforestation programs.",
//     "Promote sustainable logging.",
//     "Enforce strict environmental laws.",
//     "Support community-led conservation efforts.",
//     "Reduce paper and wood consumption.",
//     "Invest in alternative sustainable materials.",
//     "Develop eco-friendly farming techniques.",
//     "Encourage agroforestry practices.",
//     "Support indigenous land rights.",
//     "Implement carbon offset programs."
//   ]
// };

// const UploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFiles(Array.from(event.target.files));
//     setResults([]);
//     setError("");
//   };

//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       alert("Please select at least one image.");
//       return;
//     }
//     setLoading(true);
//     setProgress(0);
//     setError("");

//     const formData = new FormData();
//     selectedFiles.forEach((file) => formData.append("files[]", file));

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           setProgress(percentCompleted);
//         }
//       });
//       setResults(response.data.results);
//     } catch (error) {
//       setError("Error uploading files. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2>Upload Images for Disaster Detection</h2>
//       <input type="file" multiple accept="image/*" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={loading}>
//         {loading ? "Processing..." : "Upload"}
//       </button>

//       {progress > 0 && <div className="progress-bar" style={{ width: `${progress}%` }}></div>}
//       {error && <p className="error-message">{error}</p>}

//       <div className="results-container">
//         {results.map((result, index) => {
//           const disasterClassFormatted = result.disaster_class.trim().toLowerCase();
//           const mitigations = disasterMitigations[disasterClassFormatted] || ["No mitigation strategies available."];

//           return (
//             <div key={index} className="result-box">
//               <h3>Predicted Disaster: {result.disaster_class}</h3>
//               <p>Confidence: {result.accuracy}%</p>

//               <div className="images">
//                 <img src={result.original_url} alt="Original" className="image" />
//                 <img src={result.mask_url} alt="Masked" className="image" />
//               </div>

//               <h4>Mitigation Strategies:</h4>
//               <ul className="mitigation-list">
//                 {mitigations.map((solution, idx) => (
//                   <li key={idx}>{solution}</li>
//                 ))}
//               </ul>

//               {result.accuracy && !isNaN(parseFloat(result.accuracy)) && (
//                 <div className="chart-container">
//                   <Bar
//                     data={{
//                       labels: ["Prediction Accuracy"],
//                       datasets: [
//                         {
//                           label: "Confidence Level (%)",
//                           data: [parseFloat(result.accuracy)],
//                           backgroundColor: "rgba(54, 162, 235, 0.6)"
//                         }
//                       ]
//                     }}
//                     options={{
//                       maintainAspectRatio: false,
//                       scales: {
//                         y: {
//                           beginAtZero: true,
//                           max: 100
//                         }
//                       }
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css";

// const UploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
  
//   const handleFileChange = (event) => {
//     setSelectedFiles(Array.from(event.target.files));
//     setError("");
//   };

//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       alert("Please select at least one image.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     const formData = new FormData();
//     selectedFiles.forEach((file) => formData.append("files[]", file));

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       navigate("/results", { state: { results: response.data.results } });
//     } catch (error) {
//       setError("Error uploading files. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2>Upload Images for Disaster Detection</h2>
//       <div className="upload-box">
//         <input type="file" multiple accept="image/*" onChange={handleFileChange} />
//         <button className="upload-btn" onClick={handleUpload} disabled={loading}>
//           {loading ? "Processing..." : "Upload"}
//         </button>
//       </div>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default UploadForm;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../assets/styles.css";

// const UploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setSelectedFiles(Array.from(event.target.files));
//     setError("");
//   };

//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       alert("Please select at least one image.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     const formData = new FormData();
//     selectedFiles.forEach((file) => formData.append("files[]", file));

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       navigate("/results", { state: { results: response.data.results } });
//     } catch (error) {
//       setError("Error uploading files. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <h2 className="hero-title">Upload Images for Disaster Detection</h2>
//         <p className="hero-text">Upload images and let AI detect disaster risks.</p>
//         <div className="upload-box">
//           <input type="file" multiple accept="image/*" onChange={handleFileChange} />
//           <button className="upload-btn" onClick={handleUpload} disabled={loading}>
//             {loading ? "Processing..." : "Upload"}
//           </button>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;







import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

const UploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendUrl = "https://disaster-backend-1.onrender.com/upload";


  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
    setError("");
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one image.");
      return;
    }
    setLoading(true);
    setError("");
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("files[]", file));

    try {
      const response = await axios.post(`${backendUrl}/upload`, formData);

      navigate("/results", { state: { results: response.data.results } });
    } catch (error) {
      console.error("Upload Error:", error);
      setError("Error uploading files. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">Upload Images for Disaster Detection</h2>
        <p className="hero-text">Upload images and let AI detect disaster risks.</p>

        {/* Upload Section */}
        <div className="upload-box">
          <input type="file" multiple accept="image/*" onChange={handleFileChange} />
          <button className="upload-btn" onClick={handleUpload} disabled={loading}>
            {loading ? "Processing..." : "Upload"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {/* Instructions Section */}
        <div className="instruction-box">
          <h3>📌 Upload Guidelines:</h3>
          <ul>
            <li>✔ Supported disasters: <b>Deforestation, Flood, Landslide</b>.</li>
            <li>✔ Upload <b>clear and high-quality</b> images.</li>
            <li>❌ Avoid images of <b>Fire, Earthquake</b> (not supported yet).</li>
            <li>❌ Blurry, low-resolution, or edited images may give inaccurate results.</li>
            <li>✔ Use <b>JPEG, PNG</b> formats for best results.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
