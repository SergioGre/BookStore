import { Component } from '@angular/core';
import { authors } from '../../model/book.model';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ChipModule } from 'primeng/chip';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  
  selector: 'app-author-list',
  standalone: true,
  imports: [ChipModule, FormsModule, FloatLabelModule, CommonModule, InputTextModule, ButtonModule],
  templateUrl: './author-list.component.html',
 
})
export class AuthorListComponent {

  authorsCopy: string[] = authors;
  author: string = '';

  Add() {
    if(this.author != ''){
      authors.push(this.author)
      this.author = ' '
    }
    else {
      alert("Заполнтите поле")
    }
  }


}
