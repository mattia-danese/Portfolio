import React, { useRef, useEffect, useState } from 'react';
import { Float, Decal, Html } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Ball = ({ imgUrl, name, position, scale = 1.2 }) => {
  const decal = useLoader(TextureLoader, imgUrl);
  const meshRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [rotationIntensity, setRotationIntensity] = useState(2);

  // Adjust intensity based on screen width
  useEffect(() => {
    const handleResize = () => {
      setRotationIntensity(window.innerWidth < 943 ? 0.8 : 1.5);
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={10} rotationIntensity={rotationIntensity} floatIntensity={1}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={scale}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {hovered && (
            <Html
                position={[0, 1.5, 0]} // slightly above the sphere
                center
                style={{
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                }}
            >
                {name}
            </Html>
        )}
        
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#FFFFFF"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Front Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 6.25]}
          flatShading
          map={decal}
        />

        {/* Back Decal */}
        <Decal
          position={[0, 0, -1]}
          rotation={[Math.PI, 0, Math.PI + 6.25]}
          flatShading
          map={decal}
          depthTest={false}
          depthWrite={true}
        />

        {/* Left Decal */}
        <Decal
          position={[-1, 0, 0]}                    // left side (negative X)
          rotation={[0, -Math.PI / 2, 6.25]}        // face outward
          flatShading
          map={decal}
        />

        {/* Right Decal */}
        <Decal
          position={[1, 0, 0]}                     // right side (positive X)
          rotation={[0, Math.PI / 2, 6.25]}       // face outward
          flatShading
          map={decal}
        />

        {/* Top Decal */}
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 6.25]}
          flatShading
          map={decal}
        />

        {/* Bottom Decal */}
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export default Ball;
