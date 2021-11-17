import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // categories = ["Aksiyon", "Macera", "Romantik", "Dram", "Bilim Kurgu"];

  categories: Category[] = [
    {id: "1", name: "Aksiyon"},
    {id: "2", name: "Macera"},
    {id: "3", name: "Romantik"},
    {id: "4", name: "Dram"},
    {id: "5", name: "Bilim Kurgu"},
  ]
}
