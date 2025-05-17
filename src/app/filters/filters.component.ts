import { Component} from '@angular/core';
import { FoodCard } from '../productCard';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  foods:FoodCard[] = []
  filteredFoods:FoodCard[] = []
}
