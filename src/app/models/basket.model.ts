// Payload for Baskets/AddToBasket and Baskets/UpdateBasket
export interface BasketActionPayload {
  productId: number;
  quantity: number;
  price: number; // API says: "you have to write the product quantity, id and price"
}

// Structure of an item in the basket, as returned by Baskets/GetAll
export interface BasketItem {
  // CHECK API for Baskets/GetAll response structure for each item!
  id: number;               // This might be a unique basket item ID, OR the productId. Clarify with API response.
  productId: number;        // Likely the ID of the product.
  name?: string;             // CHECK API: Is product name included?
  quantity: number;         // From API
  unitPrice: number;        // CHECK API: Is unit price included, or do you only get total price per line?
  totalPrice?: number;       // quantity * unitPrice. CHECK API: Is this field present?
  imageUrl?: string;         // CHECK API: Is product image URL included?
  // Any other product-specific details returned for basket items
}

// Overall structure for the basket from Baskets/GetAll
export interface Basket {
  // CHECK API for Baskets/GetAll response structure!
  items: BasketItem[];
  totalAmount?: number; // CHECK API: Is there a total amount for the whole basket?
  // Any other properties like basketId, userId, etc.
}