import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import PanoramaViewer from "../src/components/PanoramaViewer";
import Controls from "../src/components/Controls";
import "./App.css";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const panoramicImages = [
    "../src/assets/pano1.jpg",
    // Add more image paths here
  ];

  return (
    <div className="app-container">
      <Canvas className="canvas">
        <PanoramaViewer imageUrl={panoramicImages[currentImageIndex]} />
        <Controls />
      </Canvas>

      {/* Optional Navigation Controls */}
      <div className="navigation-controls">
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev > 0 ? prev - 1 : panoramicImages.length - 1
            )
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev < panoramicImages.length - 1 ? prev + 1 : 0
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
