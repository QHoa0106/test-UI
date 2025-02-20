"use client";
import { useState } from "react";

interface Filters {
  onSearch: (searchTerm: string) => void;
  onFilter: (filterType: string) => void;
  onDateChange: (dateRange: { from: string; to: string }) => void;
}

const Filters = ({ onSearch, onFilter, onDateChange }: Filters) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter(value);
    onFilter(value);
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "from" | "to"
  ) => {
    const newDateRange = { ...dateRange, [type]: e.target.value };
    setDateRange(newDateRange);
    onDateChange(newDateRange);
  };

  return (
    <div className="box mb-4">
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={handleSearch}
          />
        </p>

        <p className="control">
          <span className="select">
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="top-selling">Top Selling</option>
              <option value="low-stock">Low Stock</option>
            </select>
          </span>
        </p>

        <p className="control">
          <input
            className="input"
            type="date"
            value={dateRange.from}
            onChange={(e) => handleDateChange(e, "from")}
          />
        </p>

        <p className="control">
          <input
            className="input"
            type="date"
            value={dateRange.to}
            onChange={(e) => handleDateChange(e, "to")}
          />
        </p>

        <p className="control">
          <button className="button is-primary">Search</button>
        </p>
      </div>
    </div>
  );
};

export default Filters;
