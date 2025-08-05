import { UserIcon, GroupIcon, MeetingIcon, LaptopIcon } from "./ui/icons";

export default function Home() {
  return (
    <div className="bg-primary w-full h-[950px] flex flex-col items-center justify-center py-24 px-4">
      <div className="w-full max-w-[1000px] flex flex-col items-start justify-center gap-4 pb-6">
        <h2 className="font-sans text-white font-semibold text-5xl">
          Session Structure
        </h2>
        <div className="flex items-center justify-between px-12 py-8 bg-primary-light rounded-4xl w-full">
          <div className="w-full flex flex-col items-center">
            <UserIcon />
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-sans text-white text-4xl font-semibold">
                Private Tutoring
              </h3>
              <p className="font-sans text-white text-center text-base">
                $40/hour
              </p>
            </div>
          </div>
          <p className="text-white font-bold text-2xl font-sans">OR</p>
          <div className="w-full flex flex-col items-center">
            <GroupIcon />
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-sans text-white text-4xl font-semibold">
                Group Session
              </h3>
              <p className="font-sans text-white text-center text-base">
                Rate dependent on group size
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-12 py-8 bg-primary-light rounded-4xl w-full">
          <div className="w-full flex flex-col items-center">
            <MeetingIcon />
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-sans text-white text-4xl font-semibold">
                In Person
              </h3>
              <p className="font-sans text-white text-center text-base">
                Located in North Bay, ON
              </p>
            </div>
          </div>
          <p className="text-white font-bold text-2xl font-sans">OR</p>
          <div className="w-full flex flex-col items-center">
            <LaptopIcon />
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-sans text-white text-4xl font-semibold">
                Online
              </h3>
              <p className="font-sans text-white text-center text-base">
                Conducted over Zoom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
