import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ scale, position }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width < 500;
  const scale = windowSize.width < 500 ? 0.5 : windowSize.width < 900 ? 0.6 : 0.75;
  const position = windowSize.width < 500
    ? [-4, -1.75, -2.2]
    : windowSize.width < 900
    ? [-1, -2.5, -1.8]
    : [0, -3, -1.5];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} scale={scale} position={position} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};


// const ComputersCanvas = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         // listener for changes in screen size
//         const mediaQuery = window.matchMedia('(max-width: 500px)');

//         // initial value
//         setIsMobile(mediaQuery.matches);

//         // callback function when screen size changes
//         const handleMediaQueryChange = (event) => {
//             setIsMobile(event.matches);
//         }

//         // add callback function as event listener
//         mediaQuery.addEventListener('change', handleMediaQueryChange);

//         // remove listener when component is unmounted
//         return () => {
//             mediaQuery.removeEventListener('change', handleMediaQueryChange);
//         }

//     }, [])

//     return (
//         <Canvas
//             frameloop='demand'
//             shadows
//             camera={{ position: [20, 3, 5], fov: 25 }}
//             gl={{ preserveDrawingBuffer: true }}
//         >
//             <Suspense fallback={<CanvasLoader />}>
//                 <OrbitControls 
//                     enableZoom={false}
//                     maxPolarAngle={Math.PI / 2}
//                     minPolarAngle={Math.PI / 2}
//                 />
//                 <Computers isMobile={isMobile}/>
//             </Suspense>

//             <Preload all />
//         </Canvas>
//     )
// }

export default ComputersCanvas