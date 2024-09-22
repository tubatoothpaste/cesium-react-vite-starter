import React, { useEffect, useRef } from 'react'
import { Ion, Viewer } from 'cesium'

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_KEY

function App() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cesiumContainerRef.current) {
      const viewer = new Viewer(cesiumContainerRef.current)
      return () => viewer.destroy()
    }
  }, [])

  return (
    <div className="cesium" ref={cesiumContainerRef} />
  )
}

export default App
