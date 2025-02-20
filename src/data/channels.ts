export type Channel = {
  id: string;
  name: string;
  category: string;
  net_revenue: number;
  quantity: number;
  facebook: number;
  google: number;
  tiktok: number;
  klaviyo: number;
  others: number;
};

export const channels: Channel[] = [
  {
    id: "1",
    name: "Facebook Ads",
    category: "Social Media",
    net_revenue: 38479,
    quantity: 1668,
    facebook: 85.13,
    google: 3.06,
    tiktok: 0.84,
    klaviyo: 3.66,
    others: 7.31,
  },
  {
    id: "2",
    name: "Google Ads",
    category: "Search Engine",
    net_revenue: 47404,
    quantity: 1446,
    facebook: 77.25,
    google: 7.61,
    tiktok: 4.56,
    klaviyo: 2.9,
    others: 7.68,
  },
];
