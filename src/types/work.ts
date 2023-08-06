import { ImageURL } from './imageURL';

export type Work = {
  id: string;
  title: string;
  description: string;
  imageURL: ImageURL;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
