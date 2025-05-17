import { JsonpClientBackend, withJsonpSupport } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodCard } from '../productCard';
import { CartService } from '../../services/cart.service';
import { inject } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() food!:FoodCard

  ganresCount:string ='all'
  categoriesChanged(data:string){
      this.ganresCount = data
  }
  cartService = inject(CartService);
  addToCart(product: any){
    this.cartService.addToCart(product)
    alert("Product added to Cart!")
  }
}
