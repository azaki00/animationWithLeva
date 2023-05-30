import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/kuda.glb')
  const { actions } = useAnimations(animations, group)

  const { animationsX } = useControls({
    // playAnimation: { value: false, onChange: (value) => handlePlayAnimation(value) }
    animation1 : {}
  })

  const animationControls = {}
  animations.forEach((animation) => {
    animationControls[animation.name] = { value: false, onChange: (value) => handleAnimationToggle(animation.name, value) };
    animationsX.push(animation);
  })

  const handlePlayAnimation = (value) => {
    actions['show'].paused = !value
    if (value) {
      actions['show'].reset()
      actions['show'].play()
    }
  }

  // useFrame((state, delta) => {
  //   state.camera.position.set(0, 0, 3)
  //   state.camera.lookAt(0, 0, 0)
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="75242e57d0a64999b5b1e7021213fdc5fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="kuda">
                  <group name="slot_origin">
                    <group name="Bip01" position={[0, 174.742, -98]} rotation={[-0.02, 0, -Math.PI / 2]}>
                      <group name="Object_8">
                        <primitive object={nodes._rootJoint} />
                        <group name="Object_10" rotation={[-Math.PI / 2, 0, 0]} />
                        <skinnedMesh
                          name="Object_11"
                          geometry={nodes.Object_11.geometry}
                          material={materials.Material__25}
                          skeleton={nodes.Object_11.skeleton}
                        />
                      </group>
                    </group>
                    <group name="slot_zuoqi" position={[0, 202.358, -28.034]} />
                  </group>
                  <group name="h_djs_low" rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/kuda.glb')