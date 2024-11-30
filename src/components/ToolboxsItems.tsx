import { cn } from "@/lib/util";

const ToolboxsItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: { title: string; icon: string }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
          <div className={cn("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {items.map((item, index) => (
          <div
            className={cn(
              "inline-flex  items-center gap-4 py-2 px-3 outline outline-2 rounded-lg outline-white/10",
            )}
            key={index}
          >
            <div className="size-10 bg-white rounded-full">
              <img src={item.icon} alt="tool" />
            </div>
            <span className="font-semibold text-white/70">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxsItems;
