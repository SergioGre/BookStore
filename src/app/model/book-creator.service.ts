import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCreatorService {
  private formVisibleSource = new Subject<boolean>();
  formVisible$ = this.formVisibleSource.asObservable();

  toggleFormVisibility(isVisible: boolean) {
    this.formVisibleSource.next(isVisible);
  }
}