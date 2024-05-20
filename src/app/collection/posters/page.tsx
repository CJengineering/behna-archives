import CollectionContainer from "@/components/CollectionContainer";

import React from "react";

export  default async function page() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <CollectionContainer />
    </main>
  );
}
