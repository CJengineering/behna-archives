import { AirtableRecord } from "@/interfaces";

export const getRecordByTitle = (
  records: AirtableRecord[],
  title: string
): AirtableRecord | undefined => {
  const cleanedTitle = decodeURIComponent(title);
  return records.find(
    (record) => record.fields["Title (English)"]?.[0] === cleanedTitle
  );
};

