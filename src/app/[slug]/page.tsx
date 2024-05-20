import CollectionItem from "@/components/CollectionItem";
import CollectionItemDesktop from "@/components/CollectionItemDesktop";
import CollectionItemV2 from "@/components/CollectionItemV2";
import React from "react";

export default function DynamicPoster({
  params,
}: {
  params: { slug: string };
}) {
  return (
    // <div><CollectionItem title ={params.slug}></CollectionItem></div>
    <div>
      <div className="md:hidden">
        <CollectionItemV2 slug={params.slug}></CollectionItemV2>
      </div>
      <div className="">
        <CollectionItemDesktop slug={params.slug}></CollectionItemDesktop>
      </div>
    </div>
  );
}
