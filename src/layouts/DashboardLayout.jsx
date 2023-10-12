import { FaBook, FaBookOpen, FaBookmark, FaCartPlus, FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
          {isAdmin ? 
          <>
          <li><NavLink to='/dashboard/adminuser'><FaHome></FaHome><a>Admin Home</a></NavLink></li>
          <li><NavLink to='/dashboard/additems'><FaBookmark></FaBookmark><a>Add Items</a></NavLink></li>
          <li><NavLink to='/dashboard/manageitems'><FaMoneyCheckAlt></FaMoneyCheckAlt><a>Manage Items</a></NavLink></li>
          <li><NavLink to='/dashboard/adminbooking'><FaBookOpen></FaBookOpen><a>Manage Bookings</a></NavLink></li>
          <li><NavLink to='/dashboard/allusers'><FaBook></FaBook><a>All Users</a></NavLink></li>
          </>
          : 
          <>
          <li><NavLink to='/dashboard/user'><FaHome></FaHome><a>User Home</a></NavLink></li>
          <li><NavLink to='/dashboard/reservation'><FaBookmark></FaBookmark><a>Reservation</a></NavLink></li>
          <li><NavLink to='/dashboard/payment'><FaMoneyCheckAlt></FaMoneyCheckAlt><a>Payment History</a></NavLink></li>
          <li><NavLink to='/dashboard/mycart'><FaCartPlus></FaCartPlus><a>My Cart <div className="badge badge-secondary">{cart?.length || 0}</div></a></NavLink></li>
          <li><NavLink to='/dashboard/review'><FaBookOpen></FaBookOpen><a>Add Review</a></NavLink></li>
          <li><NavLink to='/dashboard/booking'><FaBook></FaBook><a>My Booking</a></NavLink></li>
          </>}
          
          <div className="divider"></div>

          <li><NavLink to='/'><FaHome></FaHome><a>Home</a></NavLink></li>
          <li><NavLink to='/menu'><FaHome></FaHome><a>Menu</a></NavLink></li>
          <li><NavLink to='/order/offered'><FaBook></FaBook><a>Order Item</a></NavLink></li>
          <li><NavLink to='/contact'><FaBook></FaBook><a>Contact</a></NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
