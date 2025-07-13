// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../assets/styles.css";

// const mitigationMeasures = {
//   Deforestation: [
//     "Promote afforestation and reforestation.",
//     "Implement sustainable logging practices.",
//     "Strengthen forest protection laws.",
//     "Encourage agroforestry techniques.",
//     "Improve land-use planning.",
//   ],
//   Landslide: [
//     "Plant deep-rooted vegetation.",
//     "Construct retaining walls and terraces.",
//     "Improve drainage systems.",
//     "Implement early warning systems.",
//     "Avoid deforestation in high-risk areas.",
//   ],
//   Flood: [
//     "Improve urban drainage systems.",
//     "Construct flood barriers and levees.",
//     "Promote rainwater harvesting.",
//     "Implement sustainable land management.",
//     "Enforce floodplain zoning regulations.",
//   ],
// };

// const PredictionResult = () => {
//   const location = useLocation();
//   const results = location.state?.results || [];

//   const [darkMode, setDarkMode] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setLoading(false), 1500); // Simulate loading delay
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className={`prediction-container ${darkMode ? "dark-mode" : ""}`}>
//       <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
//       </button>

//       <h2>Prediction Results</h2>
//       {loading ? (
//         <div className="loader"></div>
//       ) : results.length > 0 ? (
//         results.map((result, index) => (
//           <div key={index} className="result-card">
//             <div className="image-container">
//               <img src={result.original_url} alt="Original" className="result-image" />
//               <img src={result.mask_url} alt="Segmented Mask" className="result-image" />
//             </div>
//             <h3>Disaster Type: {result.disaster_class}</h3>
            
//             <div className="progress-bar">
//               <div className="progress" style={{ width: `${result.accuracy}%` }}>
//                 {result.accuracy.toFixed(2)}%
//               </div>
//             </div>

//             <h4>Mitigation Measures:</h4>
//             <ul>
//               {mitigationMeasures[result.disaster_class]?.map((measure, i) => (
//                 <li key={i}>{measure}</li>
//               )) || <li>No mitigation measures available.</li>}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default PredictionResult;



// import { useLocation, useNavigate } from "react-router-dom";

// const mitigationMeasures = {
//   Deforestation: [
//     "Promote afforestation and reforestation.",
//     "Implement sustainable logging practices.",
//     "Strengthen forest protection laws.",
//     "Encourage agroforestry techniques.",
//     "Improve land-use planning.",
//     "Ban illegal logging activities.",
//     "Raise awareness about conservation.",
//     "Reduce paper and wood consumption.",
//     "Implement carbon offset programs.",
//     "Support indigenous forest management."
//   ],
//   Landslide: [
//     "Plant deep-rooted vegetation.",
//     "Construct retaining walls and terraces.",
//     "Improve drainage systems.",
//     "Implement early warning systems.",
//     "Enforce strict land-use policies.",
//     "Avoid deforestation in high-risk areas.",
//     "Use slope stabilization techniques.",
//     "Develop hazard maps for planning.",
//     "Monitor soil movement using sensors.",
//     "Train communities on emergency response."
//   ],
//   Flood: [
//     "Improve urban drainage systems.",
//     "Construct flood barriers and levees.",
//     "Promote rainwater harvesting.",
//     "Implement sustainable land management.",
//     "Enforce floodplain zoning regulations.",
//     "Strengthen embankments along rivers.",
//     "Develop community flood response plans.",
//     "Use permeable surfaces in urban areas.",
//     "Implement reforestation in watersheds.",
//     "Deploy real-time flood monitoring systems."
//   ]
// };

// const PredictionResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   if (!location.state || !location.state.results) {
//     return <p>Error: No results found. <button onClick={() => navigate("/")}>Go Back</button></p>;
//   }

//   const results = location.state.results;

//   return (
//     <div className="results-container">
//       <h2>Prediction Results</h2>
//       {results.map((result, index) => (
//         <div key={index} className="result-card">
//           <h3>Disaster Detected: {result.disaster_class}</h3>
//           <p>Confidence: {result.accuracy.toFixed(2)}%</p>
          
//           <div className="image-container">
//             <img src={result.original_url} alt="Original" className="result-image" />
//             <img src={result.mask_url} alt="Mask" className="result-image" />
//           </div>

//           <h4>Mitigation Strategies:</h4>
//           <ul className="mitigation-list">
//             {mitigationMeasures[result.disaster_class]?.map((measure, i) => (
//               <li key={i}>{measure}</li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button className="back-btn" onClick={() => navigate("/")}>Upload Another Image</button>
//     </div>
//   );
// };

// export default PredictionResult;





import React from "react";
import { useLocation,useNavigate} from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
import "../assets/styles.css"; // Ensure CSS file exists

const mitigationMeasures = {
  Deforestation: [
    "🌱 Promote afforestation and reforestation.",
    "🌳 Implement sustainable logging practices.",
    "🛑 Strengthen forest protection laws.",
    "👩‍🌾 Encourage agroforestry techniques.",
    "📍 Improve land-use planning.",
    "🚫 Ban illegal logging activities.",
    "📢 Raise awareness about conservation.",
    "📉 Reduce paper and wood consumption.",
    "🌍 Implement carbon offset programs.",
    "🛠️ Support indigenous forest management.",
  ],
  Landslide: [
    "🌿 Plant deep-rooted vegetation.",
    "🏗️ Construct retaining walls and terraces.",
    "💧 Improve drainage systems.",
    "🚨 Implement early warning systems.",
    "📜 Enforce strict land-use policies.",
    "🚫 Avoid deforestation in high-risk areas.",
    "🔧 Use slope stabilization techniques.",
    "🗺️ Develop hazard maps for planning.",
    "📡 Monitor soil movement using sensors.",
    "👨‍👩‍👧‍👦 Train communities on emergency response.",
  ],
  Flood: [
    "🚰 Improve urban drainage systems.",
    "🛑 Construct flood barriers and levees.",
    "💦 Promote rainwater harvesting.",
    "🌾 Implement sustainable land management.",
    "🏞️ Enforce floodplain zoning regulations.",
    "💪 Strengthen embankments along rivers.",
    "⚠️ Develop community flood response plans.",
    "🏗️ Use permeable surfaces in urban areas.",
    "🌲 Implement reforestation in watersheds.",
    "📡 Deploy real-time flood monitoring systems.",
  ],
};
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const PredictionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const results = location.state?.results || []; // Ensure results is always an array

  return (
    <div className="results-container">
      <h2 className="prediction-title">🌍 Disaster Prediction Results</h2>

      {results.length > 0 ? (
        results.map((result, index) => {
          const disasterPercentage = result.accuracy; // Disaster affected percentage
          const unaffectedPercentage = 100 - disasterPercentage; // Unaffected area

          // Data for the vertical bar chart
          const data = {
            labels: ["Disaster Affected", "Unaffected Area"],
            datasets: [
              {
                label: `${result.disaster_class} Impact`,
                data: [disasterPercentage, unaffectedPercentage],
                backgroundColor: ["#FF4C4C", "#4CAF50"], // Red for disaster, Green for safe areas
                borderColor: ["#D32F2F", "#2E7D32"],
                borderWidth: 1,
              },
            ],
          };

          const options = {
            indexAxis: "y", // Vertical bar chart
            responsive: true,
            scales: {
              x: {
                grid: { color: "rgba(255, 255, 255, 0.2)" },
                ticks: { color: "white", font: { size: 14 } },
              },
              y: {
                grid: { color: "rgba(255, 255, 255, 0.2)" },
                ticks: { color: "white", font: { size: 14 } },
              },
            },
            plugins: {
              legend: { display: false },
            },
          };

          return (
            <div key={index} className="result-card">
              <p className="prediction-info">
                <strong>🌪 Disaster Type:</strong> {result.disaster_class}
              </p>
              <p className="prediction-info">
                <strong>📊 Accuracy:</strong> {result.accuracy?.toFixed(2)}%
              </p>

              {/* Image Section */}
              <div className="image-container">
                <div>
                  <p><strong>🖼️ Original Image:</strong></p>
                  <img className="result-image" src={result.original_url} alt="Original" />
                </div>
                <div>
                  <p><strong>🎭 Predicted Mask:</strong></p>
                  <img className="result-image mask-image" src={result.mask_url} alt="Mask" />
                </div>
              </div>

              {/* Mitigation Measures & Bar Chart Side-by-Side */}
              <div className="mitigation-chart-container">
                {/* Left: Mitigation Measures */}
                <div className="mitigation-section">
                  <h3>✅ Mitigation Measures</h3>
                  <ul className="mitigation-list">
                    {mitigationMeasures[result.disaster_class]?.map((measure, i) => (
                      <li key={i}>{measure}</li>
                    )) || <p>No mitigation measures available.</p>}
                  </ul>
                </div>

                {/* Right: Vertical Bar Chart */}
                <div className="chart-container">
                  <h3>Disaster Impact Analysis</h3>
                  <div style={{ width: "700px", height: "350px" }}>
                    <Bar data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No results found.</p>
      )}
       {/* Back to Upload Page Button */}
       <button className="upload-btn" onClick={() => navigate("/UploadForm")}>
        Predict Another Disaster
      </button>
    </div>
  );
};

export default PredictionResult;
