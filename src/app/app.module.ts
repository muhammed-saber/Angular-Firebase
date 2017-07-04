import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { FirebaseService} from './services/firebase.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';



const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path: 'listings', component:ListingsComponent},
{path: 'listing/:id', component:ListingComponent},
{path: 'add-listing', component:AddListingComponent},
{path: 'edit-listing/:id', component:EditListingComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyB43b-DiGrZO6yz96pEwxccj-0olc5sbhU",
    authDomain: "proplistings-2547c.firebaseapp.com",
    databaseURL: "https://proplistings-2547c.firebaseio.com",
    projectId: "proplistings-2547c",
    storageBucket: "proplistings-2547c.appspot.com",
    messagingSenderId: "361254912976"
  }),
  AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
