import { QuoteIcon } from "./icons";

export default function Quote() {
  return (
    <div className="flex flex-col w-full max-w-[850px] gap-4 md:gap-8 p-4 md:p-8 rounded-3xl bg-[linear-gradient(180deg,#3F3D43_0%,#252327_100%)] shadow-[0_0_4px_0_rgba(0,0,0,0.15),0_16px_16px_-8px_rgba(0,0,0,0.15),0_8px_8px_-4px_rgba(0,0,0,0.15),0_4px_4px_-2px_rgba(0,0,0,0.15),0_2px_2px_-1px_rgba(0,0,0,0.15),0_1px_1px_-0.5px_rgba(0,0,0,0.15),inset_0_0_1px_0.5px_rgba(0,0,0,0.5),inset_0_-2px_2px_0_rgba(0,0,0,0.15),inset_0_2px_2px_0_rgba(255,255,255,0.15)]">
      <QuoteIcon className="size-[40px] md:size-[100px]" />
      <div className="w-full flex flex-col gap-4 md:gap-8 pb-2 md:pb-4">
        <div className="w-full flex flex-col gap-3 md:gap-4">
          <span className="text-white font-sans font-medium text-small md:text-xl">
            From our very first session, Colleen demonstrated a deep and
            comprehensive understanding of each subject. She was very good at
            taking complex concepts and breaking them down into clear,
            manageable steps. She was incredibly patient and always took the
            time to ensure I truly understood the material, rather than just
            memorizing it.
          </span>
          <span className="text-white font-sans font-semibold text-small md:text-xl">
            Thanks to her guidance, my confidence grew significantly, and I saw
            a big improvement in my grades. I went from struggling with key
            topics to feeling confident in my ability to solve problems and
            succeed in my classes.
          </span>
          <span className="text-white font-sans font-semibold text-small md:text-xl">
            Colleen is not only an exceptional teacher but also a dedicated and
            encouraging mentor. I am very grateful for her help and
            wholeheartedly recommend her to any student looking to excel in
            their courses.
          </span>
        </div>
        <span className="text-white font-sans font-extrabold text-base md:text-2xl">
          - Rohan A.
        </span>
      </div>
    </div>
  );
}
