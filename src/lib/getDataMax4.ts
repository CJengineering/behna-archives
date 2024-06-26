import { AirtableRecord, AirtableResponse } from "@/interfaces";

export const getDataMax4 = async (): Promise<AirtableRecord[]> => {
  const url =
    "https://api.airtable.com/v0/appZPb0bGSr4922QN/Posters?maxRecords=8&view=Grid%20view";
  const headers = {
    Authorization:
      "Bearer patUv0gZATPbSw2xA.4b1b2eaa3f4099122601e14f54d018f9de2d7fba01693e8eb6a5f7dee3567632",
      "Cache-Control": "no-cache",
  };

  try {
    const response = await fetch(url, { headers });
    const data: AirtableResponse = await response.json();
  
    return data.records; // Return the array of records directly
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};