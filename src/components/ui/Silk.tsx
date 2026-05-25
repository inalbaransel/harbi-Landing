/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useMemo, useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import { Color, Mesh, ShaderMaterial } from 'three';
import { IUniform } from 'three';

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

void main() {
  vec2 uv = vUv * uScale;
  
  // Subtle rotation
  float c = cos(uRotation);
  float s = sin(uRotation);
  uv = mat2(c, -s, s, c) * uv;

  float tOffset = uSpeed * uTime;
  
  // Simplified pattern
  float pattern = 0.6 + 0.4 * sin(4.0 * (uv.x + uv.y + 0.1 * tOffset) + 
                                  sin(8.0 * (uv.x - uv.y - 0.05 * tOffset)));

  vec3 col = uColor * pattern;
  
  // Simple noise
  float rnd = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col -= rnd * 0.05 * uNoiseIntensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
  isAnimated: boolean;
}

const SilkPlane = React.memo(forwardRef<Mesh, SilkPlaneProps>(function SilkPlane({ uniforms, isAnimated }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    if (!isAnimated) return;
    
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current && mesh.current.material) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}));
SilkPlane.displayName = 'SilkPlane';

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  isAnimated?: boolean;
}

const Silk: React.FC<SilkProps> = React.memo(({ 
  speed = 5, 
  scale = 1, 
  color = '#1F91DC', 
  noiseIntensity = 1.5, 
  rotation = 0,
  isAnimated = true 
}) => {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <Canvas 
      dpr={1} 
      frameloop={isAnimated ? "always" : "demand"}
      gl={{ 
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
        depth: false
      }}
    >
      <SilkPlane ref={meshRef} uniforms={uniforms} isAnimated={isAnimated} />
    </Canvas>
  );
});

Silk.displayName = 'Silk';

export default Silk;
