import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  books: Array<{}>
  constructor() {
    this.books = [
      {
        title: "L'Art de la guerre",
        year: 1993,
        author: "Sun Tzu",
        category: "History Books"
      },
      {
        title: "Sapiens: une breve histoire de l'humanité",
        year: 2011,
        author: "Yuval Noah Harari",
        category: "History Books"
      },
      {
        title: "de l'inegalité parmi les societes",
        year: 1997,
        author: "Jared Diamond",
        category: "History Books"
      }, {
        title: "the silk roads",
        year: 2015,
        author: "Peter Frankopan",
        category: "History Books"
      }

    ]
    console.log(this.books)
  }

  ngOnInit() {
  }

}
