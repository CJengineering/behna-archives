import { AirtableRecord, ImageRelated } from "@/interfaces";

export function extractImages(records: AirtableRecord[], companyName: string, titleFilter: string): ImageRelated[] {
    return records
      .filter(record =>
        record.fields["Company (English)"] && 
        record.fields["Company (English)"].includes(companyName) &&
        record.fields["Title (English)"] &&
        !record.fields["Title (English)"].includes(titleFilter)
      )
      .map(record => ({
        url: record.fields["Thumbnail image URL"],
        alt: record.fields["Title (English)"][0],
        slug: record.fields["Slug"]
      }));
}