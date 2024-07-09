export interface Product {
  id: number;
  name: string;
  slug:string;
  href: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}


export interface ArrayProps {
  id: string;
  fields: {
    'Films': string[];
  };
}

export interface PropsOfFilterByMovieId {
  actors: ArrayProps[];
  movieId: string;
}


export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: {
    [key: string]: any; // Use a flexible type for fields as they contain varied data types
  };
}

export interface AirtableResponse {
  records: AirtableRecord[];
  offset?: string;
}
export interface Breadcrumb {
  id: number;
  name: string;
  href: string;
}

// Define the interface for Image
export interface Image {
  src: string;
  alt: string;
  slug: string;
}

// Define the main Product interface
export interface Poster {
  id: string;

  name: string;
  productionCompany?: string;
  yearProduced?: string;
  screen?: string;
  cast?: string;
  width?: string;
  height?: string;
  breadcrumbs: Breadcrumb[];
  imageUrl: string;
  imageAlt: string;
}
export interface ImageRelated {
  url: string;
  alt: string;
  slug: string;
}
export interface CollectionItemProps {
  slug: string;
}