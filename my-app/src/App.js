import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Model } from "./3d-model";
import { InnerModel } from "./Inner 3d-model";
import {OrbitControls, PerspectiveCamera } from "@react-three/drei";

// function Floor() {

//   return (
//     <mesh 
//       rotation={[-Math.PI / 2, 0, 0]}
//       position={[0, -3, -10]}
//       receiveShadow>
//       <planeBufferGeometry attach="geometry" args={[100, 100]}/>
//       <meshBasicMaterial attach="material" opacity={0.3} />
//     </mesh>
//   );
// }



export let scaleAcceleration = 0;
export let rotationAcceleration = 0.002;
export let spinning = false;

export function spinModels() {
  scaleAcceleration = 0.0001;
  spinning = true;  
  return scaleAcceleration
}

export default function App() {
  let cameraDistance = 300;
    if (window.innerWidth <= 700) {
      cameraDistance = 250;
    }
  return (
    <div className="canvas">
      <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, `${cameraDistance}`]} />
        <hemisphereLight/>
        <Suspense fallback={null}>
          <Model/> 
          <InnerModel/>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
