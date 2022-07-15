import { Component, OnInit } from '@angular/core';
import { Book } from '../product-list/model/book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  livros!:Book;

  constructor() { }

  ngOnInit(): void {

    console.log()

  }



}
