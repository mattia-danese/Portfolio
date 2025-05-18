import React, { useRef, useLayoutEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Ball from './canvas/Ball';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const BallsGrid = ({ ballScale, spacing, numCols, windowWidth }) => {
  const ballDiameter = ballScale * 2;
  const numRows = Math.ceil(technologies.length / numCols);

  return (
    <>
      {technologies.map((tech, index) => {
        const row = Math.floor(index / numCols);
        const col = index % numCols;

        const isLastRow = row === numRows - 1;
        const itemsInRow = isLastRow && technologies.length % numCols !== 0
          ? technologies.length % numCols
          : numCols;

        const colOffset = (itemsInRow - 1) / 2;

        const x = (col - colOffset) * ballDiameter * spacing;
        
        // const yOffset = numCols === 3 ? 5 : 3;
        const isMobile = windowWidth < 800;
        const yOffset = isMobile ? 5 : 0;

        const y = (((numRows - 1) / 2 - row) * ballDiameter * spacing) - yOffset;

        return (
          <Ball
            key={tech.name}
            imgUrl={tech.icon}
            name={tech.name}
            position={[x, y, 0]}
            scale={ballScale}
          />
        );
      })}
    </>
  );
};

const Skills = () => {
  const canvasRef = useRef(null);
  const [layout, setLayout] = useState({
    ballScale: 1.2,
    numCols: 5,
    spacing: 1.5,
    zoom: 10,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
  const updateLayout = () => {
    if (!canvasRef.current) return;

    const height = canvasRef.current.offsetHeight;

    const isMobile = window.innerWidth < 800;
    const numCols = isMobile ? 3 : 5;
    const ballScale = isMobile ? 9 : 8;
    const spacing = isMobile ? 1.3 : 1.5;

    const numRows = Math.ceil(technologies.length / numCols);
    const floatMargin = 1;

    const totalHeight = numRows * ballScale * 2 * spacing;
    const zoom = height > 0 ? height / (totalHeight + floatMargin * 2) : 10;

    setLayout({ numCols, ballScale, spacing, zoom });
    setWindowWidth(window.innerWidth); // trigger rerender when window changes
  };

  updateLayout();
  window.addEventListener('resize', updateLayout);
  return () => window.removeEventListener('resize', updateLayout);
}, []);

  const { ballScale, spacing, numCols, zoom } = layout;

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', }}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          The tech I have used
        </p>
        <h2 className={styles.sectionHeadText}>
          My Skills.
        </h2>
      </motion.div>

      <div
        ref={canvasRef}
        style={{
          flex: 1,
          maxWidth: '100%',
          width: '100vw',
          height: '90vh',
          margin: '0 auto',
          overflow: 'visible',
        }}
      >
        <Canvas
          key={`${windowWidth} - ${numCols}`}
          orthographic
          camera={{ zoom: zoom, position: [0, 0, 100] }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <BallsGrid ballScale={ballScale} spacing={spacing} numCols={numCols} windowWidth={windowWidth} />
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
