import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';

import {ButtdemComponent} from './components/buttdem/buttdem.component';
import { ObjectListComponent} from './components/object-list/object-list.component';
import { BookCreaterComponent } from './components/book-creater/book-creater.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtdemComponent,  ObjectListComponent, BookCreaterComponent, AuthorListComponent, ButtonModule, FilterMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books_list';

  currentComponent = 'bookList'; 

  toggleComponents(component: string) {
    this.currentComponent = component;
  }
}
