import { useEffect, RefObject } from "react";

export function useSteamyPhysics(
  footerRef: RefObject<HTMLElement | null>,
  maskGroupRef: RefObject<SVGGElement | null>
) {
  useEffect(() => {
    const footer = footerRef.current;
    const maskGroup = maskGroupRef.current;

    if (!footer || !maskGroup) return;

    interface Droplet {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      lastTrailY: number;
      mass: number;
    }

    interface Trail {
      el: SVGCircleElement;
      age: number;
    }

    const droplets: Droplet[] = [];
    const trails: Trail[] = [];
    let time = 0;
    let animationFrameId: number;

    function loop() {
      time++;
      
      // Safety check in React strict mode or unmounted state
      if (!footer || !maskGroup) return;
      if (!footer.offsetWidth) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      const rect = footer.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight + 500 && rect.bottom > -500;

      if (isVisible) {
        if (time % 30 === 0 && droplets.length < 25) {
          const size = Math.random() * 4 + 4; // 4 to 8px
          const x = Math.random() * (footer.offsetWidth - size);
          droplets.push({
            x,
            y: -20,
            vx: 0,
            vy: 0,
            size,
            lastTrailY: -20,
            mass: size,
          });
        }

        for (let i = droplets.length - 1; i >= 0; i--) {
          const d = droplets[i];

          d.vy += 0.05 * (d.mass / 5);
          const terminal = 2 + d.mass / 2;
          if (d.vy > terminal) d.vy = terminal;

          if (Math.random() < 0.15) {
            d.vx += (Math.random() - 0.5) * 2;
          }
          if (Math.random() < 0.05) {
            d.vy *= 0.1;
          }

          d.vx *= 0.9;
          d.x += d.vx;
          d.y += d.vy;

          if (d.y - d.lastTrailY > d.size * 1.2) {
            const piece = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            piece.setAttribute("cx", String(d.x + d.size / 2));
            piece.setAttribute("cy", String(d.y + d.size / 2));
            piece.setAttribute("r", String(d.size * 1.2));
            piece.setAttribute("fill", "rgb(0,0,0)");
            
            maskGroup.appendChild(piece);
            trails.push({ el: piece, age: 0 });
            d.lastTrailY = d.y;
          }

          if (d.y > footer.offsetHeight + 10) {
            droplets.splice(i, 1);
          }
        }

        for (let i = trails.length - 1; i >= 0; i--) {
          const t = trails[i];
          t.age++;
          const maxAge = 400;

          if (t.age > maxAge) {
            t.el.remove();
            trails.splice(i, 1);
          } else {
            const fadeProgress = Math.max(0, (t.age - 100) / (maxAge - 100));
            const c = Math.floor(fadeProgress * 255);
            t.el.setAttribute("fill", `rgb(${c},${c},${c})`);
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Clean up SVG nodes dynamically added outside of React lifecycle
      trails.forEach((t) => t.el.remove());
    };
  }, [footerRef, maskGroupRef]);
}
