import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Book } from './model/book';

@Injectable()

export class BookService{

  //private url = '';
  //private url = 'https://localhost:44382/api/bookstore';
  //httpOptions = {
  //  Headers: new HttpHeaders({'content-type' : 'application/json'})
  //}


  //constructor(private http:HttpClient){ }

  //getBook(){
  //  return this.http.get(this.url);
  //}


  constructor() { }

  getBook(): Observable<any>{
    let bookArray = [
      {
        id: 1,
        name: 'Sherlok Homes',
        price: 23.90,
        quantity: 10,
        category: 'Invertigação',
        img:'img1',
      },
      {
        id: 2,
        name: 'Mundo de sofia',
        price: 46.99,
        quantity: 15,
        category: 'Romance',
        img:'img2',
      },
      {
        id: 3,
        name: 'Luppin',
        price: 87.67,
        quantity: 12,
        category: 'Novela',
        img:'img3',
      },
      {
        id: 4,
        name: 'Ultimos dos magicos.',
        price: 45.60,
        quantity: 4,
        category: 'Magia',
        img:'img4',
      },
      {
        id: 5,
        name: 'Gravity Falls 3',
        price: 89.54,
        quantity: 14,
        category: 'Aventura',
        img:'img5',
      },
      {
        id: 6,
        name: 'Mitologia Nordica',
        price: 34.54,
        quantity: 18,
        category: 'Mitologia',
        img:'img6',
      },
      {
        id: 7,
        name: 'A arte da Guerra',
        price: 67.54,
        quantity: 8,
        category: 'Luta',
        img:'img7',
      },
      {
        id: 8,
        name: 'A garota do lago.',
        price: 78.45,
        quantity: 5,
        category: 'Historia',
        img:'img8',
      }
    ]

    return of(bookArray);

  }
}



