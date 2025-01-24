import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeBean = ({ position, rotation, scale }) => {
  const beanShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.ellipse(0, 0, 0.4, 0.2, 0, Math.PI * 2);
    
    const extrudeSettings = {
      steps: 1,
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3
    };
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <mesh
      geometry={beanShape}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshPhongMaterial
        color="#4A2C2A"
        shininess={30}
      />
    </mesh>
  );
};

const CoffeeCup = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const beans = useMemo(() => {
    const beanArray = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      const height = Math.random() * 4 - 1;
      
      beanArray.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: [1.0, 1.0, 1.0]
      });
    }
    return beanArray;
  }, []);

  return (
    <group ref={groupRef} rotation={[-0.1, -0.4, 0]} scale={[0.9, 0.9, 0.9]}>
      {/* Main cup body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.0, 1.4, 3.2, 32]} />
        <meshPhongMaterial color="#E3C4A8" shininess={30} />
      </mesh>

      {/* Sleeve */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[2.02, 1.42, 1.2, 32]} />
        <meshPhongMaterial color="#D4B69B" shininess={20} />
      </mesh>

      {/* Lid base */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[2.1, 2.0, 0.25, 32]} />
        <meshPhongMaterial color="#2A2A2A" shininess={40} />
      </mesh>

      {/* Lid top */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
        <meshPhongMaterial color="#2A2A2A" shininess={40} />
      </mesh>

      {/* Coffee beans */}
      {beans.map((bean, index) => (
        <CoffeeBean
          key={index}
          position={bean.position}
          rotation={bean.rotation}
          scale={bean.scale}
        />
      ))}
    </group>
  );
};

const CoffeeScene = () => {
  return (
    <div id="coffee-3d-container" style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <CoffeeCup />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default CoffeeScene;
