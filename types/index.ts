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

export type FacebookAccount = {
  id: string;
  name: string;
  url: string;
  image: string;
  followers?: string;
  description?: string;
  verified?: boolean;
  zaloUrl?: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
};
export type ZaloGroup = {
  id: string;
  name: string;
  slug: string;
  image: string;
  link: string;
};