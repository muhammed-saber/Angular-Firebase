import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;



  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
     this.folder = 'listingimages';
      this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>
   }

  getListing(){
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
  }

  getListingDetail(id){
    this.listing = this.db.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }


  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
  }
}
updateListing(id, listing){
  return this.listings.update(id, listing);
}

deleteListing(id){
  return this.listings.remove(id);
}

}
interface Listing{
 $key?:string;
 title?:string;
 type?:string;
 image?:string;
 city?:string;
 owner?:string;
 bedrooms?:string;
}
