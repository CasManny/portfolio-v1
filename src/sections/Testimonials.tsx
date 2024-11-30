import SectionHeader from "@/components/SectionHeader";
import Avatar from "../../public/assets/images/memoji-avatar-1.png";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
  {
    name: "Alex Turner",
    postion: "Marketing Manager & TechStartup",
    text: "Alex Was instrumental in transforming our website into a powerful marketing Piece.",
    avatar: Avatar,
  },
];
const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          desc=" Don't just take my words for it, see what my client have to say about
        me."
          title="What clients say about me"
        />

        <div className="flex mt-16 lg:mt-24 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="max-w-xs md:p-8 p-6 md:max-w-md">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt="person"
                      className="max-h-full"
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.postion}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
