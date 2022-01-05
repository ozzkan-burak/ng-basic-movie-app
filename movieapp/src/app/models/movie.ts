export interface Movie {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  isPopular: boolean;
  datePublished?: Date;
  categoryId?: number;
}
