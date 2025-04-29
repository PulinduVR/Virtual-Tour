import React from "react";
import { Html } from "@react-three/drei";

const NavigationLink = ({ position, label, onClick }) => {
  return (
    <group position={position}>
      <mesh
        onClick={onClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="blue" />
      </mesh>
      <Html distanceFactor={10}>
        <div className="nav-label">{label}</div>
      </Html>
    </group>
  );
};

export default NavigationLink;