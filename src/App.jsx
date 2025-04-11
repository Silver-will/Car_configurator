import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PresentationControls } from '@react-three/drei'
import Experience from './Components/Experience'
import { Canvas } from '@react-three/fiber'
import Interface from './Components/Interface'
import { CustomizationProvider } from './Contexts/Customization'

function App() {
  return (
    <>
      <CustomizationProvider>
      <div className="App">
        <Canvas  shadows gl={{ antialias: false, preserveDrawingBuffer: true }} camera={{position: [12,4,10], fov: 35, zoom: 0.5}}>
          <Experience />
        </Canvas>
        <Interface/>
        </div>
      </CustomizationProvider>
    </>
  )
}

export default App
