import { Component, OnInit } from '@angular/core';
import { CategoryService } from './service/category.service';
import { Category } from './category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(
  private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(Response =>(this.categories = Response))
  }

}
