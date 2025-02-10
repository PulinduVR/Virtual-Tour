import React from "react";
import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return (
    <OrbitControls
      enableZoom={true}
      enablePan={false}
      enableDamping={true}
      dampingFactor={0.1}
      rotateSpeed={0.5}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
    />
  );
};

export default Controls;
