"use client";
import { useState } from "react";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { channels } from "../../../data/channels";

export default function SalesByChannels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const filteredData = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterType);
  console.log(dateRange);

  return (
    <div>
      <h1 className="title is-3">Analytics: Sales by Channels</h1>
      <Filters
        onSearch={(value) => setSearchTerm(value)}
        onFilter={(value) => setFilterType(value)}
        onDateChange={(range) => setDateRange(range)}
      />

      <Table data={filteredData} />
    </div>
  );
}
