"use client";
import Image from "next/image";
import { Product } from "../data/products";
import { Channel } from "@/data/channels";
import { Category } from "@/data/categories";

interface TableProps {
  data: Product[] | Channel[] | Category[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="table-wrapper">
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Net Revenue</th>
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
              <td>#{index + 1}</td>

              <td>
                <div className="flex items-center">
                  <Image
                    src={`/images/products/${item.id}.jpg`}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="ml-3">
                    <p className="has-text-link">{item.name}</p>
                    <p className="is-size-7 has-text-grey">
                      3D Inflated Effect, Best Seller, Customizable
                    </p>
                  </div>
                </div>
              </td>

              <td className="has-text-weight-bold">
                {"net_revenue" in item
                  ? `$${item.net_revenue.toLocaleString()}`
                  : "N/A"}
              </td>

              <td>
                {"net_revenue" in item
                  ? ((Number(item.net_revenue) / 410911) * 100).toFixed(2) + "%"
                  : "N/A"}
              </td>

              <td>
                {"quantity" in item ? item.quantity.toLocaleString() : "N/A"}
              </td>

              <td className="has-text-success">{item.facebook}%</td>

              <td className="has-text-info">{item.google}%</td>

              <td className="has-text-warning">{item.tiktok}%</td>

              <td className="has-text-danger">{item.klaviyo}%</td>

              <td>{item.others}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
