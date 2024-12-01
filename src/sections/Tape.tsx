const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Responsive",
];
const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 py-3"
            style={{
              transform: "translateX(-500px)",
            }}
          >
            {words.map((word, index) => (
              <div className="inline-flex gap-4" key={index}>
                <span className="size-6 items-center text-gray-900 -rotate-12">
                  +
                </span>
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
