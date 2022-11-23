/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes } = useGLTF('/3d-model.gltf')
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    if (window.innerWidth <= 720) {
      meshRef.current.rotation.x += 0.0028;
      meshRef.current.rotation.y += 0.0022;
    } else {
      meshRef.current.rotation.x += 0.0008;
      meshRef.current.rotation.y += 0.0002;
    }

  });
  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={nodes.mesh_0.geometry} castShadow>
      <meshBasicMaterial color="#33bbcf" shininess={0} opacity={0.2} transparent />
      </mesh>
    </group>
  )
}

useGLTF.preload('/3d-model.gltf')
