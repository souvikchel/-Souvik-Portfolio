import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(t / 4) / 2;
        meshRef.current.rotation.y = Math.sin(t / 2) / 2;
        meshRef.current.rotation.z = Math.sin(t / 8) / 2;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
                <meshStandardMaterial
                    color="#6366f1"
                    roughness={0.3}
                    metalness={0.7}
                    emissive="#6366f1"
                    emissiveIntensity={0.2}
                />
            </Sphere>
            <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
        </Float>
    );
};

const ParticleField = () => {
    const particlesRef = useRef();
    const particleCount = 300;

    // Memoize particle positions to avoid recalculation
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.05;
        particlesRef.current.rotation.y = t;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#6366f1"
                transparent
                opacity={0.5}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
};

const Scene3D = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}
        >
            <ambientLight intensity={0.4} />
            <AnimatedSphere />
            <ParticleField />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
                enableDamping
                dampingFactor={0.05}
            />
        </Canvas>
    );
};

export default Scene3D;
