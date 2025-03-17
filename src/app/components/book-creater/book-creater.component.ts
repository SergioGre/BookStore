import { Component, OnInit } from '@angular/core';
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


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-book-creater',
  standalone: true,
  imports: [ButtonModule, FormsModule, CascadeSelectModule, InputTextModule, FloatLabelModule, InputTextareaModule, InputNumberModule, CardModule],
  templateUrl: './book-creater.component.html',
  styleUrl: './book-creater.component.css'
})
export class BookCreaterComponent {
  newTitle: string = ''

 vievConsol(){
  console.log(this.newTitle)
 }

 bookAuthors: any[] | undefined;
    selectedAuthor: any;
    
    ngOnInit() {
      this.bookAuthors = authors
    }
  description: string = ''; 

  pages: number = 0;

  bookLanguage: any[] = languages;
  selectedLanguage: any;

  genre: string = '';
}
