import Link from "next/link";

export function ContactButton() {
  return (
    <Link
      href="mailto:teachercolleenm@gmail.com"
      className="flex h-9 md:h-12 items-center shadow-button text-white text-sm md:text-xl font-sans font-medium bg-primary hover:bg-primary-dark rounded-full px-4 md:px-6 py-3 md:py-3 transition active:scale-97"
    >
      Contact Me
    </Link>
  );
}

export function ContactHeroButton() {
  return (
    <Link
      href="mailto:teachercolleenm@gmail.com"
      className="flex items-center text-white text-base md:text-2xl px-4 md:px-6 py-2 md:py-3 bg-primary hover:bg-primary-dark font-sans font-medium shadow-button rounded-full transition active:scale-97"
    >
      Book a Session
    </Link>
  );
}

export function AboutMeButton() {
  return (
    <Link
      href="#about-me"
      className="flex items-center text-white text-xs md:text-base px-4 md:px-5 py-2 md:py-3 bg-[#303436] hover:bg-[#242728] font-sans font-medium shadow-button-subtle rounded-full transition active:scale-97"
    >
      About Colleen
    </Link>
  );
}
