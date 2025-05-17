import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FoodCard } from '../productCard';
import { FoodservService } from '../cardFounder';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  


  
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
  deleteFromCart(item: any){
    this.cartService.delete(item)
  }
  
  order(){
    alert('Your purchase has been made');
      
  }




}
