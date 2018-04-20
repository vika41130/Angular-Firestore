import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  itemdoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {

    this.itemCollection = this.afs.collection('items', ref => ref.orderBy('title', 'desc').endAt('Item 2').limit(3));

    // this.items = this.afs.collection('items').valueChanges();
    this.items = this.itemCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    });
  }

  getItem() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemdoc = this.afs.doc(`items/${item.id}`);
    this.itemdoc.delete();
  }

  updateItem(item: Item) {
    this.itemdoc = this.afs.doc(`items/${item.id}`);
    this.itemdoc.update(item);
  }
}

