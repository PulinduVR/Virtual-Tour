import React from 'react'
import { Html } from '@react-three/drei'

const Hotsport = ({ position, label }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="red" transparent opacity={0.5} />
      </mesh>
      <Html distanceFactor={10}>
        <div className="hotspot-label">{label}</div>
      </Html>
    </group>
  )
}

export default Hotsport