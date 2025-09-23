import { QuoteIcon } from "./icons";

interface QuoteProps {
  paragraphs: string[];
  name: string;
}

export default function Quote({ paragraphs, name }: QuoteProps) {
  return (
    <div className="flex flex-col justify-center w-full max-w-[850px] gap-4 md:gap-8 p-4 md:p-8 rounded-3xl bg-[linear-gradient(180deg,#3F3D43_0%,#252327_100%)] shadow-[0_0_4px_0_rgba(0,0,0,0.15),0_16px_16px_-8px_rgba(0,0,0,0.15),0_8px_8px_-4px_rgba(0,0,0,0.15),0_4px_4px_-2px_rgba(0,0,0,0.15),0_2px_2px_-1px_rgba(0,0,0,0.15),0_1px_1px_-0.5px_rgba(0,0,0,0.15),inset_0_0_1px_0.5px_rgba(0,0,0,0.5),inset_0_-2px_2px_0_rgba(0,0,0,0.15),inset_0_2px_2px_0_rgba(255,255,255,0.15)]">
      <QuoteIcon className="size-[40px] md:size-[100px]" />
      <div className="w-full flex flex-col gap-4 md:gap-8 pb-2 md:pb-4">
        <div className="w-full flex flex-col gap-3 md:gap-4">
          {paragraphs.map((paragraph, index) => (
            <span
              key={index}
              className="text-white font-sans font-medium text-small md:text-xl"
            >
              {paragraph}
            </span>
          ))}
        </div>
        <span className="text-white font-sans font-extrabold text-base md:text-2xl">
          {name}
        </span>
      </div>
    </div>
  );
}
