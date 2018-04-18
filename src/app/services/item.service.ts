import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemCollection: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>
  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges();
  }

  getItem() {
    return this.items;
  }
}

