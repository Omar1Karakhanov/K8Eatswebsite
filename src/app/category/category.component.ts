import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  choosenCategory:string = 'all'

  @Output()
  onChoose:EventEmitter<string> = new EventEmitter<string>()

 
}
