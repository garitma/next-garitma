"use client"
import React, { useEffect, useRef } from 'react';

const NoiseBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.2) {
          buffer32[i] = 0xff000000; // Black pixel
        }
      }
      noiseData.push(idata);
    };

    const paintNoise = () => {
      ctx.putImageData(noiseData[frame], 0, 0);
      frame = (frame + 1) % 10; // Cycle through frames
    };

    const loop = () => {
      paintNoise();
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 10); // 10 frames per second
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      noiseData = []; // Clear previous noise data
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
      loop();
    };

    const handleResize = () => {
      window.clearTimeout(loopTimeout);
      setup();
    };

    setup();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(loopTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} id="noise" className="opacity-[0.08]" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default NoiseBackground;
