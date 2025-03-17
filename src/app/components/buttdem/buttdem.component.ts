import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BookCreaterComponent } from '../book-creater/book-creater.component';
import { BookCreatorService } from '../../model/book-creator.service';

@Component({
  selector: 'app-buttdem',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './buttdem.component.html'

})
export class ButtdemComponent {

    constructor(private bookCreatorService: BookCreatorService) {}
  
    openBookCreate() {
      
      this.bookCreatorService.toggleFormVisibility(true);
    }

}
