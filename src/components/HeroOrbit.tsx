import { cn } from "@/lib/util";
import { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit,
  spinDuration,
  shouldSpin,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={cn(shouldOrbit && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className={`flex items-start justify-start`}
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={cn(shouldSpin && "animate-spin")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className=""
              style={{
                rotate: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
