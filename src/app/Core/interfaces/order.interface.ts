import { user } from "./user.interface";

export interface order {
    "OrderId": number,
    "OrderDate": string,
    "UserId": string,
    "Products": [{ "ProductId": number, "Quantity": number }]
    , "PaymentType": string,
    "userData"?:user,
    "totalPrice"?:number
}