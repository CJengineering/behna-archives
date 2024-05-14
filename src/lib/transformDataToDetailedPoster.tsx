

import { AirtableRecord, Poster } from "@/interfaces";


export const transformDataToDetailedPoster = (record?: AirtableRecord): Poster | null => {
  if (!record) {
    return null; // Return null or throw an error, depending on your error handling strategy
  }
 const year = record.fields["Production year"] || "N/A";
  return {
    id: record.fields.ID,
    name: record.fields["Title (English)"]?.[0] || "",
    href: record.fields["Full image URL"] || "#",
    year: record.fields["Production year"] || "N/A",
   
    description: record.fields["Company (English)"]?.[0] || "No company info",
    images: [
      {
        src: record.fields["Full image URL"] || "",
        alt: record.fields["Title (Arabic)"]?.[0] || "No alternate text",
      },
    ],
    highlights: record.fields["Cast Names"]?.split(",") || [],
    details: record.fields["Plot Summary"] || "No details available",
  };
};