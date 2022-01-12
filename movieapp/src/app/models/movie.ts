export interface Movie {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  isPopular: boolean;
  datePublished?: number;
  categoryId?: number;
}
