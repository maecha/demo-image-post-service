import Image from "next/image";
import avatar from "./avatar.jpg";

export default function Footer() {
  return (
    <footer className="text-center mt-4 text-gray-500 py-4 px-6">
      <a
        href="https://bsky.app/profile/maechan.bsky.social"
        target="_blank"
        className="inline-flex gap-2 items-center justify-center text-stone-100"
      >
        Created by
        <Image src={avatar} alt="" className="w-8 h-8 rounded-full" />
      </a>
    </footer>
  );
}
