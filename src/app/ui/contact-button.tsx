import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="mailto:teachercolleenm@gmail.com"
      className="flex h-9 md:h-12 items-center shadow-button text-white text-sm md:text-xl font-sans font-medium bg-primary hover:bg-primary-dark rounded-full px-4 md:px-6 py-3 md:py-3 transition active:scale-97"
    >
      Contact Me
    </Link>
  );
}
