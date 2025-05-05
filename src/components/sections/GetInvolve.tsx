// components/sections/GetInvolved.tsx
// import InvolvementCard from "./InvolvementCard";

import InvolvementCard from "../shared/  InvolvementCard";

export const GetInvolved = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-sm font-semibold text-gray-500 mb-2">SUPPORT</h2>
      <h1 className="text-3xl font-bold mb-4">Get Involved</h1>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Join us in empowering Africa’s future through technology.
      </p>

      <div
        className="flex gap-10 mx-auto"
        style={{ width: "1019px", height: "366px" }}
      >
        <InvolvementCard
          title="Volunteer"
          subtitle="Share Your Skills, Transform Lives"
          description="Be part of a movement shaping Africa’s digital future. Use your skills to uplift women and create opportunities."
          buttonText="Become a Volunteer"
          borderColor="border-orange-400"
          buttonColor="bg-orange-500"
          bgImage="/icon.png"
          icon="/ic_round-volunteer-activism.png"
          subtitleColor="text-orange-500"
        />
        <InvolvementCard
          title="Donate"
          subtitle="Empower Women, Transform Africa"
          description="Support women’s access to digital skills, tech, and opportunities. Every contribution matters."
          buttonText="Donate Now"
          borderColor="border-green-400"
          buttonColor="bg-green-600"
          bgImage="/icon-card2.png"
          icon="/mdi_donate.png"
          subtitleColor="text-green-500"
        />
        <InvolvementCard
          title="Partner"
          subtitle="Let’s Build a Digitally Inclusive Africa Together"
          description="Let’s collaborate to drive digital empowerment. Sponsor, mentor, or launch initiatives with us."
          buttonText="Partner with Us"
          borderColor="border-[#5D3A2E]"
          buttonColor="bg-[#5D3A2E]"
          bgImage="/icon-card3.png"
          icon="/ri_service-fill.png"
          subtitleColor="text-[#703B2D]"
        />
      </div>
    </section>
  );
};
