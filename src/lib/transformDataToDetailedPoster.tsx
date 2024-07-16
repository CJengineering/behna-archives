import { AirtableRecord, Poster } from "@/interfaces";

export const transformDataToDetailedPoster = (
  record?: AirtableRecord
): Poster | null => {
  if (!record) {
    return null; // Return null or throw an error, depending on your error handling strategy
  }
  const year = record.fields["Production year"] || "N/A";
  const width = record.fields["Width (cm)"] || "N/A";
  const height = record.fields["Height (cm)"] || "N/A";
  return {
    id: record.fields.ID,
    name: record.fields["Title (English)"]?.[0] || "",
    imageUrl: record.fields["Full image URL"] || "#",
    yearProduced: record.fields["Production year"] || "N/A",

    productionCompany: record.fields["Company (English)"]?.[0] || "N/A",
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Collection", href: "/collection" },
   
      { id: 4, name: record.fields["Title (English)"]?.[0], href: "#" },
    ],
    screen: "N/A",
    synopsis: record.fields["Synopsis (from Films)"][0]["value"]|| "N/A",
    width: width,
    height: height,
    imageAlt: record.fields["Title (English)"]?.[0] || "",
  };
};
