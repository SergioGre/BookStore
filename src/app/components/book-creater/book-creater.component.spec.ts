import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCreaterComponent } from './book-creater.component';

describe('BookCreaterComponent', () => {
  let component: BookCreaterComponent;
  let fixture: ComponentFixture<BookCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCreaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
