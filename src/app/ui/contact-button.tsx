import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="mailto:teachercolleenm@gmail.com"
      className="flex h-12 items-center shadow-button text-white text-xl font-sans font-medium bg-primary hover:bg-primary-dark rounded-full px-6 py-3 transition duration-150 active:scale-97"
    >
      Contact Me
    </Link>
  );
}
