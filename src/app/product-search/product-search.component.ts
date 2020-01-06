import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchTerm: String;

  @Output() searchNotifier = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }
}