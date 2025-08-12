// components/Topbar.tsx
"use client";

import { Menu } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

export default function Topbar() {
  return (
    <header className="w-full h-16 fixed bg-white shadow flex items-center justify-between px-6 z-10">
      {/* Left: Logo or Menu Button */}
      <div className="flex items-center gap-4">
        {/* <Menu className="h-6 w-6 cursor-pointer text-gray-700" />
        <span className="text-xl font-semibold text-gray-800">My App</span> */}
        {/* <SidebarTrigger className="h-10 w-10 "> */}
        <SidebarTrigger>
          <Menu className=" !h-6 !w-6 cursor-pointer text-gray-700" />
          <span className="sr-only text-xl font-semibold text-gray-800">
            My App
          </span>
        </SidebarTrigger>
      </div>

      {/* Right: User info / settings */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Hello, Tuck</span>
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}
