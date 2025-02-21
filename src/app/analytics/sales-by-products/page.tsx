"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { products } from "../../../data/products";

export default function SalesByProducts() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const filteredData = products.filter((products) =>
    products.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterType);
  console.log(dateRange);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <h1 className="title is-3 whitespace-nowrap">
          Analytics: Sales by Products
        </h1>
        <div className="flex-1 overflow-hidden"></div>
      </div>
      <Filters
        onSearch={(value) => setSearchTerm(value)}
        onFilter={(value) => setFilterType(value)}
        onDateChange={(range) => setDateRange(range)}
      />
      <Table data={filteredData} />
    </div>
  );
}
