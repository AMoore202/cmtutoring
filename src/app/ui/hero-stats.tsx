interface ValueCardProps {
  value: string;
  label: string;
}

function ValueCard({ value, label }: ValueCardProps) {
  return (
    <div className="flex-none flex flex-col items-center gap-1 w-[200px] md:w-[300px] px-2">
      <p className="text-white/90 text-sans text-2xl md:text-5xl font-bold">
        {value}
      </p>
      <p className="text-white/75 text-sans text-sm md:text-xl/6 font-medium text-center whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}

const items: ValueCardProps[] = [
  {
    value: "20+",
    label: "Years experience tutoring\nhigh school math & science",
  },
  {
    value: "100%",
    label: "Student pass rate",
  },
  {
    value: "6+",
    label: "Years experience teaching\ncollege math & science",
  },
  {
    value: "6+",
    label: "Years experience teaching\nhigh school math & science",
  },
];

export default function HeroStats() {
  return (
    <div className="w-full">
      {/* Desktop: static row */}
      <div className="hidden xl:flex items-start py-8 md:py-12 gap-10 justify-center">
        {items.map((item, i) => (
          <ValueCard key={`desktop-${i}`} {...item} />
        ))}
      </div>

      {/* Mobile: continuous scrolling */}
      <div className="block xl:hidden overflow-hidden py-8 md:py-12">
        <div className="flex animate-scroll will-change-transform">
          {/* original */}
          {items.map((item, i) => (
            <ValueCard key={`mobile-1-${i}`} {...item} />
          ))}
          {/* duplicate for seamless loop */}
          {items.map((item, i) => (
            <ValueCard key={`mobile-2-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
