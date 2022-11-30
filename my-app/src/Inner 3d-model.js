/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import {scaleAcceleration, spinning, rotationAcceleration} from './App.js';

export function InnerModel(props) {
  const { nodes } = useGLTF('/3d-model.gltf')
  const meshRef = useRef();
  let scale = 0.25;
  let growing = false;
  let shrinking = false
  let finished = false;

  let acceleration = 0.1;

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    if (spinning === true && finished === false && shrinking === false) {
      acceleration += 0.006
    } else if (spinning === true && finished === false && shrinking === true) {
      acceleration -= 0.006
    }

    if (meshRef.current.scale.x >= 0.145 && shrinking === false && finished === false){
      meshRef.current.scale.x -= (acceleration * scaleAcceleration);
      meshRef.current.scale.y -= (acceleration * scaleAcceleration);
      meshRef.current.scale.z -= (acceleration * scaleAcceleration);
      meshRef.current.rotation.x += rotationAcceleration * acceleration * 10.2;
      meshRef.current.rotation.y += rotationAcceleration * acceleration * 10.9;
      if(meshRef.current.scale.x <= 0.145){
        shrinking = true;
      }
    } else if (meshRef.current.scale.x <= 0.25 && shrinking === true && finished === false) {
      meshRef.current.scale.x += (acceleration * scaleAcceleration * 1.8);
      meshRef.current.scale.y += (acceleration * scaleAcceleration * 1.8);
      meshRef.current.scale.z += (acceleration * scaleAcceleration * 1.8);
      meshRef.current.rotation.x += (rotationAcceleration * acceleration * 5);
      meshRef.current.rotation.y += (rotationAcceleration * acceleration * 5);
      if (meshRef.current.scale.x >= 0.25){
        growing = true;
      }
    } else if (meshRef.current.scale.x >= 0.25 && growing === true && finished === false){
      meshRef.current.scale.x = 0.25;
      meshRef.current.scale.y = 0.25;
      meshRef.current.scale.z = 0.25;
      acceleration = 0;
      finished = true;
    } else {
      meshRef.current.rotation.x -= 0.002;
      meshRef.current.rotation.y -= 0.008;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh scale={scale} ref={meshRef} geometry={nodes.mesh_0.geometry} castShadow>
      <meshPhysicalMaterial color="#33bbcf" opacity={0.9} transparent/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/3d-model.gltf')
