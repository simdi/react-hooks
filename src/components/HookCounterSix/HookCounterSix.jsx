import React, { useState, useEffect } from 'react'

function HookCounterSix() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const {x, y} = coordinate;

  const logEventPosition = (e) => {
    setCoordinate({...coordinate, x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', logEventPosition)
  }, []);

  return (
    <div>
      X - {x}, Y - {y}
    </div>
  )
}

export default HookCounterSix;
