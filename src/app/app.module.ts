import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"



const routes: Routes = [ 
  {path: '', component: SearchComponent},
  {path: 'collection', component: CollectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent, 
    CollectionComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
