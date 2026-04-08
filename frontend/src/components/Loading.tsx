'use client'

import { useState, useEffect } from 'react'

interface LoadingProps {
  onLoadComplete: () => void
}

export default function Loading({ onLoadComplete }: LoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 1000)

    const completeTimer = setTimeout(() => {
      setIsLoading(false)
      onLoadComplete()
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">Akbar Ali</div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>
    </div>
  )
}
