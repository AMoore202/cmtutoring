import {
  UserIcon,
  GroupIcon,
  MeetingIcon,
  LaptopIcon,
  RulerIcon,
  AngleIcon,
  AtomIcon,
  BeakerIcon,
  CalculatorIcon,
  MoleculeChainIcon,
  PlanetIcon,
} from "./ui/icons";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-primary w-full h-[950px] flex flex-col items-center justify-center py-12 px-5 md:py-24">
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-center gap-4 pb-6">
          <h2 className="font-sans text-white font-semibold text-3xl md:text-5xl">
            Session Structure
          </h2>
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-12 py-6 md:py-8 bg-primary-light rounded-4xl w-full">
            <div className="w-full flex flex-col items-center">
              <UserIcon className="size-[72px] md:size-24" />
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-sans text-white text-2xl md:text-4xl font-semibold text-center">
                  Private Tutoring
                </h3>
                <p className="font-sans text-white text-center text-sm md:text-base">
                  $40/hour
                </p>
              </div>
            </div>
            <p className="text-white font-bold text-2xl font-sans">OR</p>
            <div className="w-full flex flex-col items-center">
              <GroupIcon className="size-[72px] md:size-24" />
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-sans text-white text-2xl md:text-4xl font-semibold text-center">
                  Group Session
                </h3>
                <p className="font-sans text-white text-center text-sm md:text-base">
                  Rate dependent on group size
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-12 py-6 md:py-8 bg-primary-light rounded-4xl w-full">
            <div className="w-full flex flex-col items-center">
              <MeetingIcon className="size-[72px] md:size-24" />
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-sans text-white text-2xl md:text-4xl font-semibold text-center">
                  In Person
                </h3>
                <p className="font-sans text-white text-center text-sm md:text-base">
                  Located in North Bay, ON
                </p>
              </div>
            </div>
            <p className="text-white font-bold text-2xl font-sans">OR</p>
            <div className="w-full flex flex-col items-center">
              <LaptopIcon className="size-[72px] md:size-24" />
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-sans text-white text-2xl md:text-4xl font-semibold text-center">
                  Online
                </h3>
                <p className="font-sans text-white text-center text-sm md:text-base">
                  Conducted over Zoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-footer w-full flex flex-col items-center gap-4 px-5 py-9 md:py-24">
        <RulerIcon className="absolute size-7 left-4 top-2" />
        <BeakerIcon className="absolute size-8 left-16 top-7" />
        <CalculatorIcon className="absolute size-8 left-5 bottom-1" />
        <PlanetIcon className="absolute size-6 right-[180px] bottom-1" />
        <MoleculeChainIcon className="absolute size-8 right-7 top-4" />
        <AtomIcon className="absolute size-6 right-24 top-1" />
        <AngleIcon className="absolute size-6 right-4 bottom-2" />
        <h2 className="text-white font-header font-black text-2xl md:text-4xl text-center z-10">
          Any Questions?
        </h2>
        <p className="text-white font-sans font-regular text-base md:text-2xl text-center z-10">
          Email me at teachercolleenm@gmail.com
        </p>
      </div>
    </div>
  );
}
