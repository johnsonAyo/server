interface Product { 
    productName: string; 
    productId: string
    productDescription: string; 
    size: string; 
    color: string; 
    quantity: string; 
    images: string[]; 
    price: string; 
    dateUploaded: string; 
    dateEdited: string; 
}

export { Product };  // export interface  Product, ProductVarieties