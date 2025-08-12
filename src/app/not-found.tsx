import Image from "next/image";
export default function NotFound() {
  return (
    <div className="h-auto w-auto flex flex-row items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 -mr-20 z-10">
        Give Tuck imformation to create this page
      </h1>
      <Image
        src="/notfound.jpg"
        alt="Not Found"
        width={400} // required
        height={400}
        // className="w-full h-auto object-cover"
        // className=" min-w-1/4"
        className="z-0"
      />
    </div>
  );
}
