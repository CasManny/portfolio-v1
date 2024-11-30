const links = ["Youtube", "Whatsapp", "Facebook", "Twitter"];
const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/15 py-6 text-sm">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col gap-8 mt-5 md:flex-row">
            {links.map((link, index) => (
              <div className="inline-flex gap-1.5" key={index}>
                <span className="font-semibold">{link}</span>
                <span>&gt;</span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
