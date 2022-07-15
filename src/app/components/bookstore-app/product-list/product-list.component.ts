import { Component, Input, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './product-list-component-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


 livros:any;
  constructor(private bookService : BookService) { }

  ngOnInit(): void {

    this.bookService.getBook().subscribe(data => {
      this.livros = data;
    })

  }


}
