"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import { FaChartBar, FaSitemap, FaSignOutAlt, FaTools } from "react-icons/fa";
import { MdOutlineAdsClick, MdOutlineAssignment } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { SiGoogleads, SiTiktok } from "react-icons/si";

const Navbar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const menuItems = [
    {
      name: "Analytics",
      path: "/analytics/sales-by-products",
      icon: <FaChartBar className="w-4 h-4" />,
    },
    {
      name: "Ads Library",
      path: "/analytics/sales-by-channels",
      icon: <MdOutlineAdsClick className="w-4 h-4" />,
    },
    {
      name: "Posts ID",
      path: "/posts",
      icon: <MdOutlineAssignment className="w-4 h-4" />,
    },
    {
      name: "Google Ads",
      path: "/analytics/sales-by-categories",
      icon: <SiGoogleads className="w-4 h-4" />,
    },
    {
      name: "Fulfillment",
      path: "/fulfillment",
      icon: <FaSitemap className="w-4 h-4" />,
    },
    {
      name: "TikTok Ads",
      path: "/tiktok-ads",
      icon: <SiTiktok className="w-4 h-4" />,
    },
    { name: "Tools", path: "/tools", icon: <FaTools className="w-4 h-4" /> },
    {
      name: "Config",
      path: "/config",
      icon: <AiOutlineSetting className="w-4 h-4" />,
    },
  ];

  if (!user) {
    return null;
  }

  return (
    <>
      <nav
        className="navbar is-light px-3 py-2 text-sm"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <Image
              src="/husble-logo-1.png"
              alt="Hustle Analytics Logo"
              width={100}
              height={30}
              priority
            />
          </Link>
        </div>

        <div className="navbar-menu flex flex-wrap items-center gap-2 overflow-auto px-2">
          <div className="navbar-start flex flex-wrap gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`navbar-item px-3 py-1 flex items-center gap-1 ${
                  pathname === item.path ? "text-primary font-bold" : ""
                }`}
              >
                {item.icon}
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="navbar-item flex items-center gap-2">
            <span className="mr-2 truncate">Welcome, {user}!</span>
            <button
              className="button is-danger text-xs px-3 py-1"
              onClick={logout}
            >
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
