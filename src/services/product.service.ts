import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product, ProductFilterPayload } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/Products`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
   
    return this.http.get<Product[]>(`${this.apiUrl}/GetAll`);
  }

  getFilteredProducts(filters: ProductFilterPayload): Observable<Product[]> {
    let params = new HttpParams();
    if (filters.vegetarian !== undefined) {
      params = params.append('vegetarian', filters.vegetarian.toString());
    }
    if (filters.nuts !== undefined) {
      params = params.append('nuts', filters.nuts.toString());
    }
    if (filters.spiciness !== undefined) {
      params = params.append('spiciness', filters.spiciness.toString());
    }
    if (filters.categoryId !== undefined) {
      params = params.append('categoryId', filters.categoryId.toString());
    }
    
    return this.http.get<Product[]>(`${this.apiUrl}/GetFiltered`, { params });
  }

}