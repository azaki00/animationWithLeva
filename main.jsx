import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'


function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.03} />
      <fog attach="fog" args={['#ff5020', 5, 18]} />
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      <Sky scale={1000} sunPosition={[2, 0.4, 1]} />
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        {/* <OrbitControls /> */}
        <ScrollControls pages={3}>
          <LittlestTokyo scale={0.02} position={[0, 2.5, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
        <App />
    </>
  </React.StrictMode>,
)
