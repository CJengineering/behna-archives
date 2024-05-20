import { AirtableRecord, AirtableResponse } from "@/interfaces";

export const getData = async (): Promise<AirtableRecord[]> => {
  const url =
    "https://api.airtable.com/v0/appZPb0bGSr4922QN/Posters?maxRecords=200&view=Grid%20view";
  const headers = {
    Authorization:
      "Bearer patUv0gZATPbSw2xA.4b1b2eaa3f4099122601e14f54d018f9de2d7fba01693e8eb6a5f7dee3567632",
  };

  try {
    const response = await fetch(url, { headers });
    const data: AirtableResponse = await response.json();
    console.log("Data fetched successfully:", data.records);
    return data.records; // Return the array of records directly
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};
