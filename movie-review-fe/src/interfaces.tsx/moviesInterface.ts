type awardsType = {
  wins: number;
  nominations: number;
  text: string;
};
type tomatoesType = {
  viewer: viewerType;
  lastUpdated: Date;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};

export type MovieType = {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: awardsType;
  lastUpdated: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: tomatoesType;
};
