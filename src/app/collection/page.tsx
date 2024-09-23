import CollectionContainer from "@/components/CollectionContainer";

import React from "react";

export  default async function page() {

  return (
    <div>
      <div className="relative py-12 md:py-48 items-center">
          <div className="relative flex items-center px-12 justify-center h-full z-20">
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
