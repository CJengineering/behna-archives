import { AirtableRecord, Product } from "@/interfaces";

interface Name {
    name: string;
}

export const transformToRelatedNames = (
    record: AirtableRecord
): Name => {
    return {
        name: record.fields["Name (English)"] || "",
    };
};
