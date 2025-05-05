import Image from "next/image";

interface InvolvementCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  borderColor: string;
  buttonColor: string;
  bgImage: string;
  icon: string;
  subtitleColor: string;
}

export default function InvolvementCard({
  title,
  subtitle,
  description,
  buttonText,
  borderColor,
  buttonColor,
  bgImage,
  icon,
  subtitleColor,
}: InvolvementCardProps) {
  return (
    <div
      className={`relative bg-white shadow-md rounded-2xl border-t-4 overflow-hidden ${borderColor}`}
      style={{ width: "313px", height: "366px" }}
    >
      {/* Top-left image */}
      <Image
        src={bgImage}
        alt="decor"
        width={110} // was 92
        height={120} // was 103
        className="absolute -top-6 -left-6 opacity-30 rotate-[46deg] pointer-events-none"
      />

      {/* Top-right image */}
      <Image
        src={bgImage}
        alt="decor"
        width={110}
        height={120}
        className="absolute -top-4 -right-4 opacity-40"
        style={{ transform: "rotate(-45.95deg)" }}
      />

      <div className="flex flex-col pt-12 px-6 gap-2.5 h-full">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-10 h-10 p-2 rounded-full bg-gray-100 flex items-center justify-center">
            <Image src={icon} alt="icon" width={24} height={24} />
          </div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        <h3
          className={`font-cabinet text-sm font-medium leading-none text-center  ${subtitleColor}`}
        >
          {subtitle}
        </h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <button className={`text-white px-4 py-2 rounded-full ${buttonColor}`}>
          {buttonText} →
        </button>
      </div>
    </div>
  );
}
