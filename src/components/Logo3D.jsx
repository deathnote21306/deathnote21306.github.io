import { Suspense, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function LogoModel({ onReady }) {
  const spin = useRef();
  const { scene } = useGLTF("/models/logo.gltf");

  const cloned = useMemo(() => {
    const c = scene.clone(true);
    const modelBox = new THREE.Box3().setFromObject(c);
    const modelSize = new THREE.Vector3();
    modelBox.getSize(modelSize);
    const modelMax = Math.max(modelSize.x, modelSize.y, modelSize.z);

    c.traverse((obj) => {
      if (!obj.isMesh) return;
      const box = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      box.getSize(size);
      if (Math.max(size.x, size.y, size.z) > modelMax * 0.85) obj.visible = false;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((m) => {
        if (m?.color && m.color.r < 0.05 && m.color.g < 0.05 && m.color.b < 0.05) {
          m.transparent = true;
          m.opacity = 0;
        }
      });
    });

    return c;
  }, [scene]);

  useEffect(() => {
    if (typeof onReady === "function") onReady();
  }, [onReady, cloned]);

  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.y += delta * 0.6;
  });

  return (
    <group ref={spin}>
      <group rotation={[-Math.PI / 2, Math.PI, 0]}>
        <primitive object={cloned} />
      </group>
    </group>
  );
}

export default function Logo3D({ onReady }) {
  // Render directly into document.body, completely outside
  // the .container div and all its broken stacking contexts
  return createPortal(
    <div
      className="logo3d-portal"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearAlpha(0)}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <LogoModel onReady={onReady} />
        </Suspense>
      </Canvas>
    </div>,
    document.body  // ← mounted directly on body, no parent CSS can touch it
  );
}

useGLTF.preload("/models/logo.gltf");
