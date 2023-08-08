import { Items } from "./items.interface"

export interface Products{
    _id?:string
    author: string
    country: string
    imageLink: string
    language: string
    link: string
    amount: number
    title: string
    year: number
}

export interface ApiResponse {
    products: Products[];

  }

  export interface Response {
    products: Products;

  }

  export interface items {
    items: Items[];

  }