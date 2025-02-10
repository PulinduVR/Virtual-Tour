import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const PanoramaViewer = ({ imageUrl }) => {
  const sphereRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = 75;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    if (sphereRef.current) {
      // Add smooth rotation if needed
      // sphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[500, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial
        side={THREE.BackSide}
        attach="material"
        map={new THREE.TextureLoader().load(imageUrl)}
      />
    </Sphere>
  );
};

export default PanoramaViewer;
