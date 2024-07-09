import { AirtableRecord, AirtableResponse } from "@/interfaces";

export const getData = async (type:string): Promise<AirtableRecord[]> => {
  let allRecords :any = [];
  let offset;
  const urlBase =
    `https://api.airtable.com/v0/appZPb0bGSr4922QN/${type}?&view=Grid%20view`;
  const headers = {
    Authorization:
      "Bearer patUv0gZATPbSw2xA.4b1b2eaa3f4099122601e14f54d018f9de2d7fba01693e8eb6a5f7dee3567632",
    
      
  };

  try {
    // Continue fetching until there's no more offset (all pages are fetched)
    do {
      const responseUrl = urlBase + (offset ? `&offset=${offset}` : '');
      const response = await fetch(responseUrl, { headers });
      const data: AirtableResponse = await response.json();

      if (response.ok) {
        allRecords = allRecords.concat(data.records);
        offset = data.offset; // Update offset if there's more data to fetch
      } else {
        // If response is not OK, throw an error with the status
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
    } while (offset); // Continue if there's an offset indicating more data

    console.log("All data fetched successfully:", allRecords.length);
    return allRecords; // Return all records fetched
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};
