import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { authors } from '../../model/book.model';
import { Book } from '../../model/book.model';
import { languages } from '../../model/book.model';


import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber'
import { bookList } from '../../model/book.model';
import { BookCreatorService } from '../../model/book-creator.service';



interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-book-creater',
  standalone: true,
  imports: [ButtonModule, FormsModule, CascadeSelectModule, InputTextModule, FloatLabelModule, InputTextareaModule, InputNumberModule, CardModule, CommonModule],
  templateUrl: './book-creater.component.html',
  
})
export class BookCreaterComponent {
  newTitle: string = ''
  bookAuthors: any[] = authors;
      selectedAuthor: any;
  description: string = ''; 
  pages: number = 0;
  bookLanguage: any[] = languages;
      selectedLanguage: any;
  genre: string = '';
  isFormVisible: boolean = false;
    
    
  
  

  

  
  SaveBook() {
    if(this.Validate())
    {
    const newBook: Book = {
      title: this.newTitle,
      author: this.selectedAuthor,
      description: this.description,
      pages: this.pages,
      language: this.selectedLanguage,
      genre: this.genre
    };
    bookList.push(newBook);
    this.CleanForm();}
    else {
      alert("Не все поля заполненны");
    }
  }
  

  constructor(private bookCreatorService: BookCreatorService) {}

  ngOnInit() {
    this.bookCreatorService.formVisible$.subscribe(isVisible => {
      this.isFormVisible = isVisible;
    });
  }
  
  CleanForm(){
    this.newTitle = '';
    this.selectedAuthor = '';
    this.description = '';
    this.pages = 0;
    this.selectedLanguage = '';
    this.genre = '';
  }

  toggleFormVisibility() {
    this.CleanForm()
    this.isFormVisible = !this.isFormVisible;
    this.bookCreatorService.toggleFormVisibility(this.isFormVisible);
  }
  Validate() {
    if (this.newTitle != '' &&
      this.selectedAuthor != '' &&
      this.description != '' &&
      this.pages != 0 &&
      this.selectedLanguage != '' &&
      this.genre != ''
    ){
    return true;}
    else {
      return false;
    }
  }
}

