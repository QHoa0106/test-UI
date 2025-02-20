export interface Category {
  id: number;
  name: string;
  total_sales: number;
  total_products: number;
  facebook: number;
  google: number;
  tiktok: number;
  klaviyo: number;
  others: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Phone Accessories",
    total_sales: 180000,
    total_products: 350,
    facebook: 65.0,
    google: 15.0,
    tiktok: 10.0,
    klaviyo: 5.0,
    others: 5.0,
  },
  {
    id: 2,
    name: "Drinkware",
    total_sales: 145000,
    total_products: 290,
    facebook: 55.0,
    google: 20.0,
    tiktok: 15.0,
    klaviyo: 5.0,
    others: 5.0,
  },
  {
    id: 3,
    name: "Clothing",
    total_sales: 120500,
    total_products: 220,
    facebook: 50.0,
    google: 25.0,
    tiktok: 15.0,
    klaviyo: 5.0,
    others: 5.0,
  },
  {
    id: 4,
    name: "Home Decor",
    total_sales: 98000,
    total_products: 180,
    facebook: 45.0,
    google: 30.0,
    tiktok: 10.0,
    klaviyo: 10.0,
    others: 5.0,
  },
  {
    id: 5,
    name: "Other Accessories",
    total_sales: 50000,
    total_products: 110,
    facebook: 40.0,
    google: 30.0,
    tiktok: 15.0,
    klaviyo: 10.0,
    others: 5.0,
  },
];
