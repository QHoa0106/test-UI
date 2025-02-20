"use client";
import { useState } from "react";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { categories } from "../../../data/categories";

export default function SalesByCategories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const filteredData = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterType);
  console.log(dateRange);

  return (
    <div>
      <h1 className="title is-3">Analytics: Sales by Categories</h1>
      <Filters
        onSearch={(value) => setSearchTerm(value)}
        onFilter={(value) => setFilterType(value)}
        onDateChange={(range) => setDateRange(range)}
      />
      <Table data={filteredData} />
    </div>
  );
}
