import { headerLinks } from "../data/constant";
import { cn } from "../lib/util";

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {headerLinks.map((link, index) => {
          const contact = link.label === "Contact";
          return (
            <a
              href={link.path}
              key={index}
              className={cn(
                "nav-item",
                contact &&
                  "bg-white text-gray-900 rounded-full hover:bg-white/70 hover:text-gray-900"
              )}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
