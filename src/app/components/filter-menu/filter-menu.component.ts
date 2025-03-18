import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { bookList, setSortBookList } from '../../model/book.model';
import { authors, languages } from '../../model/book.model';

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [ButtonModule, CascadeSelectModule, CommonModule, FormsModule],
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css'], 
})
export class FilterMenuComponent {
  genresArr: string[] = Array.from(new Set(bookList.map(book => book.genre)));
  bookAuthors = authors;
  selectedAuthor: string | null = null; 
  bookLanguage: string[] = languages;
  selectedLanguage: string | null = null; 
  uniqueGenres: string[] = this.genresArr;
  selectGenre: string | null = null; 
  bookArr: any[] = [];

  FiltrSort() {
    this.bookArr = [...bookList]; 
    if (this.selectedAuthor) {
      this.getBooksByAuthor();
    }
    if (this.selectedLanguage) {
      this.getBooksByLanguage();
    }
    if (this.selectGenre) {
      this.getBooksByGenre();
    }
    setSortBookList(this.bookArr);
    
     console.log(this.bookArr); 
  }

  DeleteFiltr() {
    this.selectedAuthor = null;
    this.selectedLanguage = null;
    this.selectGenre = null;
    this.bookArr = [...bookList]; 
  }

  getBooksByAuthor() {
    this.bookArr = this.bookArr.filter(book => book.author === this.selectedAuthor);
  }

  getBooksByLanguage() {
    this.bookArr = this.bookArr.filter(book => book.language === this.selectedLanguage);
  }

  getBooksByGenre() {
    this.bookArr = this.bookArr.filter(book => book.genre === this.selectGenre);
  }
}
