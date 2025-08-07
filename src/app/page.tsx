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
        <RulerIcon className="absolute size-7 md:size-12 lg:size-14 xl:size-16 2xl:size-20 left-4 md:left-8 lg:left-10 xl:left-12 2xl:left-6 top-2 md:top-4 2xl:top-6" />
        <BeakerIcon className="absolute size-8 md:size-16 lg:size-24 xl:size-30 2xl:size-36 left-16 md:left-36 lg:left-56 xl:left-72 2xl:left-96 top-7 2xl:top-8" />
        <CalculatorIcon className="absolute size-8 md:size-20 xl:size-22 2xl:size-24 left-5 md:left-16 lg:left-32 xl:left-36 2xl:left-42 bottom-1 lg:bottom-4" />
        <PlanetIcon className="absolute size-6 md:size-14 lg:size-16 2xl:size-18 right-[180px] md:right-[280px] lg:right-[400px] xl:right-[600px] 2xl:right-[800px] bottom-1 md:bottom-2" />
        <AtomIcon className="absolute size-6 md:size-14 lg:size-16 xl:size-18 right-32 md:right-[180px] lg:right-[250px] xl:right-[325px] 2xl:right-[550px] top-1 md:top-2" />
        <MoleculeChainIcon className="absolute size-8 md:size-18 lg:size-20 2xl:size-24 right-7 lg:right-8 xl:right-9 2xl:right-10 top-4 md:top-8 2xl:top-8" />
        <AngleIcon className="absolute size-6 md:size-14 lg:size-16 2xl:size-20 right-4 md:right-22 lg:right-36 xl:right-48 2xl:right-60 bottom-2 md:bottom-6" />
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
