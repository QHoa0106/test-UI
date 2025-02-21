"use client";
import Image from "next/image";
import { Product } from "../data/products";
import { Channel } from "@/data/channels";
import { Category } from "@/data/categories";

interface TableProps {
  data: Product[] | Channel[] | Category[];
}

const Table = ({ data }: TableProps) => {
  console.log(data);
  return (
    <div className="table-wrapper">
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>NetRevenue</th>
            <th>Percent</th>
            <th>Quantity</th>
            <th>Facebook</th>
            <th>Google</th>
            <th>TikTok</th>
            <th>Klaviyo</th>
            <th>Others</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td data-label="#">#{index + 1}</td>

              <td data-label="Product Title">
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="ml-1">
                    <p className="has-text-link">{item.name}</p>
                    <p className="is-size-7 has-text-grey">
                      3D Inflated Effect, Best Seller, Customizable
                    </p>
                  </div>
                </div>
              </td>

              <td data-label="Net Revenue" className="has-text-weight-bold">
                {"net_revenue" in item
                  ? `$${item.net_revenue.toLocaleString()}`
                  : "N/A"}
              </td>

              <td data-label="Percent">
                {"percent" in item
                  ? ((Number(item.percent) / 410911) * 100).toFixed(2) + "%"
                  : "N/A"}
              </td>

              <td data-label="Quantity">
                {"quantity" in item ? item.quantity.toLocaleString() : "N/A"}
              </td>

              <td data-label="Facebook" className="has-text-success">
                {item.facebook}%
              </td>

              <td data-label="Google" className="has-text-info">
                {item.google}%
              </td>

              <td data-label="TikTok" className="has-text-warning">
                {item.tiktok}%
              </td>

              <td data-label="Klaviyo" className="has-text-danger">
                {item.klaviyo}%
              </td>

              <td data-label="Others">{item.others}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
