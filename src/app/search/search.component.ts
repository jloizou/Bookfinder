import { Component, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  books: object;

  handleSave() { 
    
  }

 

  constructor(private http: HttpClient, 
              private firestore: AngularFirestore
              ) { }

  ngOnInit(): void {
  }



  getBooks() { 
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${this.searchTerm}`).toPromise()
    .then((response: object) => { 
      this.books = response['items']
      console.log(this.books)
    })
  }

}
