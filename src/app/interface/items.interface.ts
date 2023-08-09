export interface Items {
  _id?: string
  title?: string; // The product title
  author?: string
  year?: number
  amount?: number
}


export interface items {
  items: Items[];

}

export interface item {
  items: Items;

}