import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import useAdmin from "../../pages/useadmin/Useadmin";


const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://over-stcok-server-usx2-icrxtv27y.vercel.app/cards?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Cart data received:", data);
          setCartCount(data.length || 0);
        })
        .catch((err) => {
          console.log("Error fetching cart count:", err);
        });
    } else {
      setCartCount(0);
    }
  }, [user]);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((err) => console.log("Logout error:", err));
  };

  console.log("User:", user);
  console.log("Is Admin:", isAdmin);
  console.log("Is Admin Loading:", isAdminLoading);

  const menuItems = (
    <>
      <li className="mx-2">
        <Link to="/" className="text-black">Home</Link>
      </li>
      <li className="mx-2">
        <a href="#shop" className="text-black">Shop</a>
      </li>
      
      {user?.uid ? (
        <>
          <li className="mx-2">
            <button onClick={handleLogout} className="text-black">LogOut</button>
          </li>
          {isAdmin && !isAdminLoading && (
            <li className="mx-2">
              <Link to='/deshboard' className="text-black">DeshBoard</Link>
            </li>
          )}
          <li className="mx-2 relative">
            <Link to="/cart" className="text-black flex items-center relative">
              <FiShoppingCart className="mr-1 relative" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="mx-2">
            <Link to="/login" className="text-black">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Overstock
          </Link>
        </div>

        {/* Center: Search bar */}
        <div className="flex-1 lg:flex lg:justify-center hidden lg:block">
          <div className="relative w-full max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search for anything..."
              className="input input-bordered w-full pl-12 pr-4 bg-white text-black"
            />
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <FiSearch className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Right: Menu items */}
        <div className="flex items-center space-x-4">
          <ul className="menu menu-horizontal hidden lg:flex">{menuItems}</ul>

          {/* Dropdown menu for small screens */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
