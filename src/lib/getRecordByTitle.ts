import { AirtableRecord } from "@/interfaces";

export const getRecordByTitle = async (
  records: AirtableRecord[],
  title: string
): Promise<AirtableRecord | undefined> => {
  const cleanedTitle = title;

  

  return records.find((record) => record.fields["Slug"] === cleanedTitle);
};
