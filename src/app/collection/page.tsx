import CollectionContainer from "@/components/CollectionContainer";

import React from "react";

export  default async function page() {

  return (
    <div>
        <div className="relative h-[20vh] items-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex items-center justify-center h-full z-20">
            <h1 className="text-center text-3xl md:text-5xl text-black font-bold plexSans">
              Collection
            </h1>
          </div>
        </div>
    <main className="flex min-h-screen flex-col items-center justify-between md:mx-auto md:w-[1700px]">
      <CollectionContainer />
    </main>
    </div>
  );
}
