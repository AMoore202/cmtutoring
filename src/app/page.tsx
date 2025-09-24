import Image from "next/image";
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
import CopyButton from "./ui/copy-button";
import ContactButton from "./ui/contact-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Carousel from "./ui/carousel";

export default function Home() {
  const quotes = [
    {
      paragraphs: [
        "From our very first session, Colleen demonstrated a deep and comprehensive understanding of each subject. She was very good at taking complex concepts and breaking them down into clear, manageable steps. She was incredibly patient and always took the time to ensure I truly understood the material, rather than just memorizing it.",
        "Thanks to her guidance, my confidence grew significantly, and I saw a big improvement in my grades. I went from struggling with key topics to feeling confident in my ability to solve problems and succeed in my classes.",
        "Colleen is not only an exceptional teacher but also a dedicated and encouraging mentor. I am very grateful for her help and wholeheartedly recommend her to any student looking to excel in their courses.",
      ],
      name: "- Rohan A.",
    },
    {
      paragraphs: [
        "As a mature student returning to school, I approached math with a fair amount of hesitation and lots of self-doubt. From the very beginning, Colleen created a learning environment that was both welcoming and empowering. Her teaching style is clear, patient, and incredibly supportive, which made a world of difference in helping me build not only my skills by also my confidence.",
        "Colleen has the unique ability to break down complex concepts in a way that makes them understandable no matter what your background or how long it's been since you last opened a math book. She never made me feel behind or out of place instead, she was encouraging at every step and celebrated progress, and offered guidance when challenges arose.",
        "If you're looking for a math teacher who genuinely cares and has the skill to help students succeed at any stage of life, Colleen is the right choice!",
      ],
      name: "- Taryn  C.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full justify-between flex align-baseline fixed top-0 left-0 px-6 py-4 h-[120px] z-20 bg-[linear-gradient(180deg,rgba(26,25,25,0.75)_0%,rgba(26,25,25,0)_100%)]">
        <p className="text-white text-base/8 md:text-2xl/12 font-medium font-header h-9 md:h-12 align-middle">
          Colleen McMillan Tutoring
        </p>
        <ContactButton />
      </div>
      <div
        className="w-full flex items-center justify-center h-[500px] md:h-[650px] lg:h-[800px] xl:h-[1008px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/heroimage_cropped.webp')" }}
      >
        <div className="w-[700px] xl:w-[1210px] mx-5">
          <div className="w-[300px] md:w-[450px] xl:w-[510px] 2xl:w-[595px] flex flex-col align-baseline gap-2 md:gap-4">
            <h1 className="text-white text-2xl md:text-4xl xl:text-[42px] 2xl:text-5xl font-semibold font-header">
              Colleen McMillan Tutoring
            </h1>
            <p className="text-white text-sm md:text-lg xl:text-xl 2xl:text-2xl font-sans">
              Professional math and science tutoring, online and in the North
              Bay area.
            </p>
            <div className="w-full flex items-baseline py-5 md:py-8 2xl:py-9">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 xl:gap-[120px] py-12 md:py-[150px] items-center justify-center">
        <div className="w-full flex items-center justify-center gap-[120px]">
          <div className="w-full max-w-[700px] flex flex-col gap-2 md:gap-6 items-center">
            <div className="w-full flex flex-col gap-2 md:gap-4 isolate">
              <h2 className="text-foreground font-bold font-sans text-3xl md:text-4xl">
                About Me
              </h2>
              <p className="text-foreground font-medium font-sans text-base md:text-xl">
                I&#39;m Colleen McMillan, a certified teacher (
                <Tooltip>
                  <TooltipTrigger>HBSc</TooltipTrigger>
                  <TooltipContent>Honours Bachelor of Science</TooltipContent>
                </Tooltip>
                ,{" "}
                <Tooltip>
                  <TooltipTrigger>BEd</TooltipTrigger>
                  <TooltipContent>Bachelor of Education</TooltipContent>
                </Tooltip>
                ,{" "}
                <Tooltip>
                  <TooltipTrigger>OCT</TooltipTrigger>
                  <TooltipContent>Ontario Certified Teacher</TooltipContent>
                </Tooltip>
                ) and professional tutor who has been helping high school and
                post-secondary students tackle math, chemistry, and physics for
                over 20 years. More recently, I also have also gotten back into
                the classroom, teaching both high school and post-secondary
                classes, and developing course content.
              </p>
            </div>
            <div className="w-full flex flex-col gap-1 md:gap-3">
              <h2 className="text-foreground font-semibold font-sans text-2xl mt-4 md:mt-0 md:text-[28px]">
                Courses
              </h2>
              <div className="w-full flex flex-col gap-1 md:gap-2">
                <p className="text-foreground font-medium font-sans text-base md:text-xl">
                  I provide professional tutoring for all high school levels
                  (grade 9-12), specializing in:
                </p>
                <ul className="text-foreground font-medium font-sans text-base md:text-xl list-disc list-inside pl-4">
                  <li>
                    Math -{" "}
                    <Tooltip>
                      <TooltipTrigger>MHF4U</TooltipTrigger>
                      <TooltipContent>
                        Grade 12 Advanced Functions
                      </TooltipContent>
                    </Tooltip>{" "}
                    and{" "}
                    <Tooltip>
                      <TooltipTrigger>MCV4U</TooltipTrigger>
                      <TooltipContent>
                        Grade 12 Calculus and Vectors
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    Physics -{" "}
                    <Tooltip>
                      <TooltipTrigger>SPH3U</TooltipTrigger>
                      <TooltipContent>Grade 11 Physics</TooltipContent>
                    </Tooltip>{" "}
                    and{" "}
                    <Tooltip>
                      <TooltipTrigger>SPH4U</TooltipTrigger>
                      <TooltipContent>Grade 12 Physics</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    Chemistry -{" "}
                    <Tooltip>
                      <TooltipTrigger>SCH3U</TooltipTrigger>
                      <TooltipContent>Grade 11 Chemistry</TooltipContent>
                    </Tooltip>{" "}
                    and{" "}
                    <Tooltip>
                      <TooltipTrigger>SCH4U</TooltipTrigger>
                      <TooltipContent>Grade 12 Chemistry</TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col gap-1 md:gap-2 mt-1 md:mt-0">
                <p className="text-foreground font-medium font-sans text-base md:text-xl">
                  I also provide professional tutoring for all post-secondary
                  levels:
                </p>
                <ul className="text-foreground font-medium font-sans text-base md:text-xl list-disc list-inside pl-4">
                  <li>Math</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/Colleen_Headshot.webp"
            alt="Colleen McMillan Headshot"
            width={450}
            height={450}
            className="rounded-4xl"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Carousel quotes={quotes} />
        </div>
        {/* <div className="w-[350px] flex flex-col items-center gap-12 lg:gap-20 pb-4">
          <div className="flex flex-col items-center w-full gap-1">
            <p className="text-primary text-sans text-7xl font-bold">20+</p>
            <p className="text-foreground text-sans text-xl/6 font-medium text-center">
              Years experience tutoring
              <br />
              high school math & science
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-1">
            <p className="text-primary text-sans text-7xl font-bold">100%</p>
            <p className="text-foreground text-sans text-xl/6 font-medium text-center">
              Student pass rate
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-1">
            <p className="text-primary text-sans text-7xl font-bold">6+</p>
            <p className="text-foreground text-sans text-xl/6 font-medium text-center">
              Years experience teaching
              <br />
              college math & science
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-1">
            <p className="text-primary text-sans text-7xl font-bold">6+</p>
            <p className="text-foreground text-sans text-xl/6 font-medium text-center">
              Years experience teaching and developing course content for high
              school math & science
            </p>
          </div>
        </div> */}
      </div>
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
      <div className="relative bg-footer w-full flex flex-col items-center gap-1 md:gap-4 px-5 py-9 md:py-24">
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
        <div className="flex items-center gap-1 md:gap-2">
          <p className="text-white font-sans font-regular text-base md:text-2xl text-center z-10">
            Email me at teachercolleenm@gmail.com
          </p>
          <CopyButton />
        </div>
      </div>
    </div>
  );
}
