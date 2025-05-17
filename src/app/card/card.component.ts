import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodservService } from '../cardFounder';
import { ProductComponent } from '../product/product.component';
import { FoodCard } from '../productCard';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  route: ActivatedRoute = inject(ActivatedRoute)

  foodService = inject(FoodservService)
  foodCard: FoodCard | undefined
  cartService = inject(CartService);
  constructor() {

    const foodCardId = Number(this.route.snapshot.params['id']);

    this.foodService.getAllById(foodCardId).then(foodCard => {
      this.foodCard = foodCard
      console.log(foodCard)
    })
    
  }

  addToCart(product: any){
    this.cartService.addToCart(product);
     alert('Product added to Cart!');
  }
}
