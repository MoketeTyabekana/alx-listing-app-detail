import React from "react";
import { BACKGROUND_IMAGE } from "@/constants/index";

export default function Home() {
  return (
    <main className="px-10 ">
      <section
        className="w-full hero h-[400px] bg-cover bg-center rounded-2xl mt-10 flex justify-center items-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className=" w-1/2 text-white  text-center">
          <h1 className="text-6xl font-semibold mb-6">
            Find your favorite place here!
          </h1>
          <p className="text-2xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>
    </main>
  );
}
