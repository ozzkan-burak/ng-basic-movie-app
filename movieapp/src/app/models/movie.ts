export interface Movie {
  id: number | string;
  title: string;
  desc: string;
  imageUrl: string;
  isPopular: boolean;
  datePublished?: number;
  categoryId?: number;
}
