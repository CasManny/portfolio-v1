const SectionHeader = ({
  title,
  eyebrow,
  desc,
}: {
  title: string;
  eyebrow: string;
  desc: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r bg-clip-text text-transparent from-emerald-300 to-sky-400">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {desc}
      </p>
    </>
  );
};

export default SectionHeader;