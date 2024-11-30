import { cn } from "@/lib/util";

const CardHeader = ({ title, desc, className }: { title: string; desc: string, className?: string }) => {
  return (
      <div className={cn("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <span className="text-2xl text-emerald-300">+</span>
        <h3 className="font-serif">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 lg:text-base max-w-xs">{desc}</p>
    </div>
  );
};

export default CardHeader;
