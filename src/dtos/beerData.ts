export interface beerData {
  name: string;
  description: string;
  abv: number;
  category?: string;
  country?: string;
  website?: string;

  addres: string;
  city: string;
  ibu?: number;
  coordinates?: number[];
  state?: string;
}
