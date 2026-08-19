import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  intensity = 12,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{ rx: number; ry: number; active: boolean }>({
    rx: 0,
    ry: 0,
    active: false,
  });

  return (
    <div className="scene">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          setStyle({ rx: -py * intensity * 2, ry: px * intensity * 2, active: true });
        }}
        onMouseLeave={() => setStyle({ rx: 0, ry: 0, active: false })}
        style={{
          transform: `rotateX(${style.rx}deg) rotateY(${style.ry}deg) translateZ(0) scale(${
            style.active ? 1.02 : 1
          })`,
          transformStyle: "preserve-3d",
          transition: style.active ? "transform 80ms linear" : "transform 500ms ease",
        }}
        className={cn("glass rounded-2xl p-6", className)}
      >
        {children}
      </div>
    </div>
  );
}
