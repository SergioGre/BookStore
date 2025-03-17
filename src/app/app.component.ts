import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {ButtdemComponent} from './components/buttdem/buttdem.component';
import { ObjectListComponent} from './components/object-list/object-list.component';
import { BookCreaterComponent } from './components/book-creater/book-creater.component';
import { AuthorListComponent } from './components/author-list/author-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtdemComponent,  ObjectListComponent, BookCreaterComponent, AuthorListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books_list';
}
