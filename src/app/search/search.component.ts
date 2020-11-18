import { Component, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { AngularFirestore } from "@angular/fire/firestore"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  books: object;
  isFavOpen: boolean;
  favBooks: any;

  constructor(private http: HttpClient, 
              private firestore: AngularFirestore
              ) { }

  ngOnInit(): void {
    this.isFavOpen = false
    this.firestore.collection('favourited').get().toPromise().then(response => {
      this.favBooks = response.docs.map(d => d.data())
    })
  }

  handleSave(book) { 
    this.firestore.doc(`favourited/${book.id}`).set(book , {merge: true})
  }

  handleFavButtonClick() { 
    this.isFavOpen = !this.isFavOpen
  }


  getBooks() { 
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${this.searchTerm}`).toPromise()
    .then((response: object) => { 
      this.books = response['items']
      console.log(this.favBooks)
    })
  }

}
