"use client";
import { useAuth } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && pathname !== "/login" && pathname !== "/register") {
      router.push("/login");
    }
  }, [user, pathname, router]);

  if (!user && pathname !== "/login" && pathname !== "/register") {
    return null;
  }

  return (
    <>
      {user && <Navbar />}
      <div className="container mt-5">{children}</div>
    </>
  );
}
