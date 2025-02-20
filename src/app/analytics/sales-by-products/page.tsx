"use client";
import { useEffect } from "react";
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

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <h1 className="title is-3 whitespace-nowrap">
          Analytics: Sales by Products
        </h1>
        <div className="flex-1 overflow-hidden"></div>
      </div>
      <Filters
        onSearch={() => {}}
        onFilter={() => {}}
        onDateChange={() => {}}
      />
      <Table data={products} />
    </div>
  );
}
