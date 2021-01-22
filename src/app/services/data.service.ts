import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Data {
  id?: string;
  title: string;
  subtitle: string;
  rating: number;
  distance: string;
  pricemin: string;
  time: string;
  deliveryprice: string;
  price: number;
  product: string;
  description: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataCollection: AngularFirestoreCollection<Data>;
 
  private data: Observable<Data[]>;
 
  constructor(db: AngularFirestore) {
    this.dataCollection = db.collection<Data>('data');
 
    this.data = this.dataCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getAllData() {
    return this.data;
  }
 
  getData(id) {
    return this.dataCollection.doc<Data>(id).valueChanges();
  }
 
  updateData(data: Data, id: string) {
    return this.dataCollection.doc(id).update(data);
  }
 
  addData(data: Data) {
    return this.dataCollection.add(data);
  }
 
  removeData(id) {
    return this.dataCollection.doc(id).delete();
  }
}