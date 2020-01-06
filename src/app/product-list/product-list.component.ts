import { Component } from '@angular/core';

import { products } from '../products';

import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  filter = "";
  date = new Date();
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert("You'll be alerted");
  }

  onBuy($event) {
    window.alert('Purchasing ' + $event.name);
  }

  onSearch($event) {
    this.filter = $event.searchTerm;
    console.log('Searching for ' + $event.searchTerm);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/