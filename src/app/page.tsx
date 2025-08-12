import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <Image
        src="/home.png"
        alt="Not Found"
        width={800}
        height={800}
        className="w-full z-0"
      />

      <h1 className="absolute top-1/3 left-2/5 transform -translate-x-1/2 inset-0   text-white text-6xl font-bold z-10">
        Home Page
      </h1>
    </div>
  );
}
