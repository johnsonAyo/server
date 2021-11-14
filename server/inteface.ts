interface Product { 
    productName: string; 
    productId: string
    productDescription: string; 
    productVarieties: ProductVarieties[]; 
    dateUploaded: string; 
    dateEdited: string; 
}
interface ProductVarieties { 
    size: string; 
    Id: string;
    color: string; 
    quantity: string; 
    images: string[]; 
    price: string; 
}

export { Product, ProductVarieties };  // export interface  Product, ProductVarieties