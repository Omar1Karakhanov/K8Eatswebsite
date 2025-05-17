import { Injectable } from '@angular/core';

import { FoodCard } from './productCard';

@Injectable({
  providedIn: 'root'
})
export class FoodservService {
  url = 'https://66279eb5b625bf088c090769.mockapi.io/thing'


  constructor() {}


  async getAllCards(): Promise<FoodCard[]> {
    const response = await fetch(this.url)
    return await response.json() ?? []
  }

  async getAllById(id: Number): Promise<FoodCard | undefined> {

    const response = await fetch(`${this.url}/${id}`)

    return await response.json() ?? {}
  }
}

