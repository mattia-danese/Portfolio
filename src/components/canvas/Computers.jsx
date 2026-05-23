import { Suspense, useEffect, useRef, useState } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const INITIAL_DESK_ROTATION = [-0.01, -0.2, -0.1];
const DESK_SWING_RANGE = Math.PI / 4;
const DESK_SWING_SPEED = 0.8;

const Computers = ({ scale, position }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const deskRef = useRef();

  useFrame(({ clock }) => {
    deskRef.current.rotation.y =
      INITIAL_DESK_ROTATION[1] + Math.sin(clock.elapsedTime * DESK_SWING_SPEED) * DESK_SWING_RANGE;
  });

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
        ref={deskRef}
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={INITIAL_DESK_ROTATION}
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
  const scale = windowSize.width < 500 ? 0.6 : windowSize.width < 900 ? 1 : 1.2;
  const position = windowSize.width < 500
  ? [-4, -1.25, -2.2]
  : windowSize.width < 900
  ? [-1, -1.8, -1.8]
  : [0, -2, -1.5];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        frameloop='always'
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