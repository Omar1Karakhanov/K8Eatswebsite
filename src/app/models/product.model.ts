export interface Product {
  id: number;          
  name: string;         
  description: string;  
  price: number;        
  imageUrl?: string;     
  categoryId: number;  
  categoryName?: string; 
  
  isVegetarian: boolean; 
  containsNuts: boolean;   
  spiciness: number;    
}

export interface ProductFilterPayload {
  vegetarian?: boolean;
  nuts?: boolean;
  spiciness?: number;
  categoryId?: number; 
}