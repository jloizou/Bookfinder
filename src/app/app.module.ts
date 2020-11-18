import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AngularFireModule } from "@angular/fire"



const routes: Routes = [ 
  {path: '', component: SearchComponent},
  {path: 'collection', component: CollectionComponent}
]
const firebaseConfig = {
  apiKey: "AIzaSyDhJxIyPXbAJq2rQgdngjQgW_2gcKfrP0o",
  authDomain: "bookfinder-c0cdd.firebaseapp.com",
  databaseURL: "https://bookfinder-c0cdd.firebaseio.com",
  projectId: "bookfinder-c0cdd",
  storageBucket: "bookfinder-c0cdd.appspot.com",
  messagingSenderId: "478700700214",
  appId: "1:478700700214:web:2e22d3a007bf35ff2fce97",
  measurementId: "G-M0JYK2RS7D"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent, 
    CollectionComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
