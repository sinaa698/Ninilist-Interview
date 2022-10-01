export type MovieType = {
  _id: string;
  title: string;
  genre: { _id: string; name: string };
  numberInStock: number;
  dailyRentalRate: number;
};
