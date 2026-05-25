"use client";

import Silk from "../ui/Silk";

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden opacity-10 dark:opacity-20">
      <Silk
        speed={5}
        scale={1}
        color="#3419e0"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}
