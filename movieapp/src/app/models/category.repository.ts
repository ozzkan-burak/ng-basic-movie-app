import { Category } from "./category";

export class CategoryRepository {

  private categories: Category[];

  constructor() {
    this.categories = [
      {id: "1", name: "Aksiyon"},
      {id: "2", name: "Macera"},
      {id: "3", name: "Romantik"},
      {id: "4", name: "Dram"},
      {id: "5", name: "Bilim Kurgu"},
    ]
  }

  getCategories(): Category[] {
    return this.categories;
  }

}
