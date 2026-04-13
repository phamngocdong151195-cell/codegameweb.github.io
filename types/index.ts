export type Game = {
  id: string;
  name: string;
  slug: string;
  image: string;
  codes: Code[];
};

export type Code = {
  id: string;
  name: string;
  image: string;
};
