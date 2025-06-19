// Class entity matching the table stored in the db
export interface EventItem {
  title: string;
  type: 'workshop' | 'retreat' | 'community';
  date: string;
  duration: string;
  description: string;
  image: string;
  // Optional fields for the details page
  longDescription?: string;
  detailsImage?: string;
  location?: string;
  price?: string;
  whoIsThisFor?: string;
  inquiries?: {
    "email": string;
    "phone": string;
  };
  teacherIds?: number[];
}