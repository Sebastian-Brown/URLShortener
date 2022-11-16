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

export default function App() {
  let cameraDistance = 300;
  console.log(window.innerWidth);
    if (window.innerWidth < 700) {
      cameraDistance = 300;
    }
  return (
    <div className="canvas">
      <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, `${cameraDistance}`]} />
        {/* <ambientLight intensity={0.1}/> */}
        {/* <directionalLight
        castShadow
        position={[0,10,-600]}
        intensity={1.5}/> */}
        {/* <pointLight position={[0, 90, 10]} /> */}
        <hemisphereLight/>
        <Suspense fallback={null}>
          <Model /> 
          <InnerModel scale={[0.25,0.25,0.25]}/>
          {/* <Floor className="floor"/>        */}
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
