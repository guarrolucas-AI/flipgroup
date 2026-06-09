"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Grid } from "@react-three/drei"
import * as THREE from "three"

/* ── Animated central structure ──────────────────────────────────── */
function CoreStructure() {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08
      meshRef.current.rotation.x = Math.sin(t * 0.06) * 0.12
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.12
      innerRef.current.rotation.z = t * 0.05
    }
  })

  return (
    <group>
      {/* Outer icosahedron — orange wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#E86A1A" wireframe opacity={0.7} transparent />
      </mesh>

      {/* Inner octahedron — blue wireframe */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#3B9EFF" wireframe opacity={0.9} transparent />
      </mesh>

      {/* Center solid sphere — ambient glow */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#E86A1A" />
      </mesh>
    </group>
  )
}

/* ── Orbiting business unit nodes ────────────────────────────────── */
function OrbitingUnit({
  radius,
  speed,
  offset,
  color,
  size = 0.25,
}: {
  radius: number
  speed: number
  offset: number
  color: string
  size?: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t) * radius
      groupRef.current.position.z = Math.sin(t) * radius
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.3
      groupRef.current.rotation.y = t * 2
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} wireframe />
      </mesh>
      {/* Trail ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 1.5, size * 1.6, 16]} />
        <meshBasicMaterial color={color} opacity={0.3} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

/* ── Particle field ──────────────────────────────────────────────── */
function Particles({ count = 120 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.012
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#3B9EFF" opacity={0.55} transparent sizeAttenuation />
    </points>
  )
}

/* ── Mouse-reactive camera ───────────────────────────────────────── */
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 1.2,
      0.03
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.8 + 0.5,
      0.03
    )
    state.camera.position.z = 7 + Math.sin(t * 0.1) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

/* ── Scene ───────────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <CameraRig />

      {/* Ambient */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#E86A1A" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#3B9EFF" />

      {/* Grid floor */}
      <Grid
        position={[0, -3.5, 0]}
        args={[30, 30]}
        cellSize={0.8}
        cellThickness={0.4}
        cellColor="#1E2E48"
        sectionSize={4}
        sectionThickness={1}
        sectionColor="#E86A1A"
        fadeDistance={20}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid
      />

      {/* Core */}
      <CoreStructure />

      {/* Business unit nodes */}
      {/* Capital — gold */}
      <OrbitingUnit radius={3.8} speed={0.18} offset={0} color="#C9A84C" size={0.28} />
      {/* Constech — teal */}
      <OrbitingUnit radius={4.2} speed={0.13} offset={Math.PI / 2} color="#00C4A7" size={0.22} />
      {/* Obras — orange */}
      <OrbitingUnit radius={3.5} speed={0.21} offset={Math.PI} color="#FF6B35" size={0.3} />
      {/* Perforaciones — green */}
      <OrbitingUnit radius={4.6} speed={0.15} offset={(Math.PI * 3) / 2} color="#4ADE80" size={0.2} />

      {/* Particles */}
      <Float speed={0.5} floatIntensity={0.2}>
        <Particles count={150} />
      </Float>
    </>
  )
}

/* ── Canvas export ───────────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  )
}
