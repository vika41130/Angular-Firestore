import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from './../environments/environment.prod'

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fire-store'),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();
