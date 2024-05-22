import { AirtableRecord } from "@/interfaces";

export const getRecordByTitle = (
  records: AirtableRecord[],
  title: string
): AirtableRecord | undefined => {
  const cleanedTitle = title
  return records.find(
    (record) => record.fields["Slug"] === cleanedTitle
  );
};

