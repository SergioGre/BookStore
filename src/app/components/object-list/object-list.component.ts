import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { bookList } from '../../model/book.model';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-object-list',
  standalone: true,
  imports: [CommonModule, CardModule, PanelModule],
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css'] 
})
export class ObjectListComponent {
  books: Book[] = bookList;
  openCards: boolean[] = []; 

  constructor() {
    
    this.openCards = Array(this.books.length).fill(false);
  }

  toggleCard(index: number): void {
    this.openCards[index] = !this.openCards[index]; 
  }
}
