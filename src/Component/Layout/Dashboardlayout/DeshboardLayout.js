import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../../shared/Navber/Navber';

const DeshboardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
  <input id="Deshboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="Deshboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/deshboard/myorders">My orders</Link></li>
      <li><Link to="/deshboard/addproducts">Add Products</Link></li>
      <li><Link to="/deshboard/myproducts">My Products</Link></li>
      <li><Link to="/deshboard/mybuyers">My Buyers</Link></li>
      <li><Link to="/deshboard/allusers">All users</Link></li>
      <li><Link to="/deshboard/myorders">Myorders</Link></li>
    </ul>
  
  </div>
</div>
  
        </div>
    );
};

export default DeshboardLayout;