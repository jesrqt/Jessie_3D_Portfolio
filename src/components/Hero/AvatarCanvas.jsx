import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { Html, useAnimations, useGLTF } from '@react-three/drei';
import { MyLoader } from './MyLoader';
import { Preload } from '@react-three/drei';

const Avatar = () => {
  const avatar = useGLTF("/jessie-avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [index, setIndex] = useState(2);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    actions[names[index]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[index]]?.fadeOut(0.5)
    }
  }, [index, actions, names])

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={4}
        position-y={-3}
        position-x={-1}
        rotation-y={-0.3}
      />
      <Html position={[-3.7, 0.3, 0]}>
        <button 
        onClick={() => { 
          setIndex((index + 1) % names.length)
          setIsClicked(!isClicked)
        }}
        >
          {isClicked? "Change moves!" : "Check my moves!"}
        </button>
      </Html>
    </group>
  )
}


export const AvatarCanvas = () => {
  return (
    <Canvas dpr={[0,2]}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} position={[1, 1, 1]} />
      <Suspense fallback={<MyLoader />}>
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
