import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export const Avatar = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/image/animated-jessie-cat.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.point.play();
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.023, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Object_4001" geometry={nodes.Object_4001.geometry} material-color={"orange"} skeleton={nodes.Object_4001.skeleton} />
          <skinnedMesh name="Object_6001" geometry={nodes.Object_6001.geometry} material-color={"blue"} skeleton={nodes.Object_6001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/image/animated-jessie-cat.gltf')
