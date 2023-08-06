import { ImageURL } from './imageURL';

export type About = {
  id: string;
  title: string;
  acountName: string;
  imageURL: ImageURL;
  link: string;
  isRoundIcon: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
