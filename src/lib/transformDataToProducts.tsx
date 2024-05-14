import { AirtableRecord, Product } from "@/interfaces";

export const transformDataToProducts = (
  records: AirtableRecord[]
): Product[] => {
  return records.map((record) => ({
    id: record.fields.ID,
    name: record.fields["Title (English)"]?.[0] || "",
    href: record.fields["Full image URL"],
    price: record.fields["Production year"], // Assuming 'Amount' can be treated as price
    description: record.fields["Company (English)"]?.[0] || "",
    imageSrc: record.fields["Thumbnail image URL"],
    imageAlt: record.fields["Title (Arabic)"]?.[0] || "",
  }));
};
