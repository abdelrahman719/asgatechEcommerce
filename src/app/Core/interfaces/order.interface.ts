import { product } from "./product.interface";
import { user } from "./user.interface";

export interface order {
    "OrderId": number,
    "OrderDate": string,
    "UserId": string,
    "Products": { "ProductId": number, "Quantity": number }[] ,
    "PaymentType": string,
    "ProductsWithDetails"?: { "ProductId": number, "Quantity": number , "productDetails"?:product}[] ,
    "userData"?:user,
    "totalPrice"?:number
}