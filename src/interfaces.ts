export interface Product {
    id: number;
    name: string;
    href: string;
    price: string;
    description: string;
    imageSrc: string;
    imageAlt?: string; 
  }

export interface AirtableRecord {
    id: string;
    createdTime: string;
    fields: {
      [key: string]: any;  // Use a flexible type for fields as they contain varied data types
    };
  }
  
  export interface AirtableResponse {
    records: AirtableRecord[];
  }
  export interface Breadcrumb {
    id: number;
    name: string;
    href: string;
  }
  
  // Define the interface for Image
 export  interface Image {
    src: string;
    alt: string;
  }
  
  // Define the main Product interface
  export interface Poster {
    id: string;
    name: string;
    href: string;
    year: string;
    
    description: string;
    images: { src: string; alt: string }[];
    highlights: string[];
    details: string;
  }