import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private data: DataService) { }

  categories$: object;

  ngOnInit() {
    this.data.getCategories().subscribe(
      data => this.categories$ = data
    );
  }

}
