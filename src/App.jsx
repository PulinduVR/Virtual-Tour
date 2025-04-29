import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import PanoramaViewer from "../src/components/PanoramaViewer";
import Controls from "../src/components/Controls";
import scenes from "./components/Scenes";
import NavigationLink from "./components/NavigationLink";
import Hotsport from "./components/Hotsport";
import "./App.css";

function App() {
  const [currentSceneId, setCurrentSceneId] = useState("scene1");
  const currentScene = scenes[currentSceneId];

  return (
    <div className="app-container">
      <Canvas className="canvas">
        <PanoramaViewer imageUrl={currentScene.image} />
        <Controls />
        {currentScene.links.map((link, index) => (
          <NavigationLink
            key={index}
            position={link.position}
            label={link.label}
            onClick={() => setCurrentSceneId(link.to)}
          />
        ))}
        {currentScene.hotspots.map((spot, index) => (
          <Hotsport key={index} position={spot.position} label={spot.label} />
        ))}
      </Canvas>
    </div>
  );
}

export default App;
