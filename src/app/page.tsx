import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="mt-12 h-16"></div>
      <h1 className=" text-amber-600">hello</h1>;
      <Menu className="h-10 w-10 cursor-pointer text-gray-700" />
    </div>
  );
}
