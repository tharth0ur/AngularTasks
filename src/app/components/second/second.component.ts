import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
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
        category: "science Books"
      }

    ]
    console.log(this.books)
  }

  ngOnInit() {
  }

}
