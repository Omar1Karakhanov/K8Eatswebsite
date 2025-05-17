import { Component,Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FiltersComponent } from '../filters/filters.component';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { FoodCard } from '../productCard';
import { FoodservService } from '../cardFounder';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FiltersComponent, ProductComponent, NgFor,NgIf, CardComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
    foods:FoodCard[] = []
    foodService: FoodservService = inject(FoodservService)
    filteredfoodList:FoodCard[] = []
    cartService = inject(CartService);
   
  constructor(){

  

  
    this.foodService.getAllCards().then((foodList:FoodCard[])=>{
      this.foods = foodList
      this.filteredfoodList = foodList;
      
      })
  }

    searchFilter:string = ''

    onSearching(keyword:string){
        this.searchFilter = keyword
        console.log(keyword)
    
    }
    filterResults(text:string){
      if (!text){
        this.filteredfoodList = this.foods;
        return;
      }
      this.filteredfoodList = this.foods.filter(
        food => food?.name.toLowerCase().includes(text.toLowerCase())
      )
    }
    onCategoryChange(data:string){
      if(data =='all'){
        this.filteredfoodList = this.foods
        return
      }
      this.filteredfoodList = this.foods.filter(
        food => food?.category.toLowerCase() == data
      )
    }
    rangeSpiciness(spiciness:any){
      if(spiciness == 0){
        this.filteredfoodList = this.foods
      }
      this.filteredfoodList = this.foods.filter(
        food => food?.spiciness >= spiciness 
      )
    }


    addToCart(product: any){
      this.cartService.addToCart(product);
    }

    
    
}
