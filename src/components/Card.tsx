import { PropsWithChildren } from "react";
import grainImage from "../../public/assets/images/grain.jpg";
import { cn } from "@/lib/util";

const Card = ({ className, children }: PropsWithChildren<{className?: string}>) => {
  return (
    <div
      className={cn(
          "bg-gray-800 rounded-3xl overflow-hidden z-0 relative after:content-[''] after:absolute after:z-10 after:inset-0 after:pointer-events-none after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20",
          className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage})` }}
          />
          {children}
    </div>
  );
};

export default Card;
