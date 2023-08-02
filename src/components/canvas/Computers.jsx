import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    
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
                scale={isMobile ? 0.5 : 0.75}
                position={isMobile ? [-4, -1.75, -2.2] : [0, -3, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
  )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // listener for changes in screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        // initial value
        setIsMobile(mediaQuery.matches);

        // callback function when screen size changes
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        // add callback function as event listener
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // remove listener when component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, [])

    return (
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
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas