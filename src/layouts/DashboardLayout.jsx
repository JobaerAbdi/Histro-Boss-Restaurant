import { FaBook, FaBookOpen, FaBookmark, FaCartPlus, FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useUser from "../hooks/useUser";

const DashboardLayout = () => {
  const [cart] = useCart();
  const [users] = useUser();

  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  console.log(isAdmin); // true or false

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
          <li><NavLink to='/dashboard/adminUser'><FaHome></FaHome><a>Admin Home</a></NavLink></li>
          <li><NavLink to='/dashboard/addItems'><FaBookmark></FaBookmark><a>Add Items</a></NavLink></li>
          <li><NavLink to='/dashboard/manageItems'><FaMoneyCheckAlt></FaMoneyCheckAlt><a>Manage Items</a></NavLink></li>
          <li><NavLink to='/dashboard/adminBooking'><FaBookOpen></FaBookOpen><a>Manage Bookings</a></NavLink></li>
          <li><NavLink to='/dashboard/allUsers'><FaBook></FaBook><a>All Users <button className="btn btn-sm"><div className="badge badge-secondary">{users?.length || 0}</div></button></a></NavLink></li>
          </>
          : 
          <>
          <li><NavLink to='/dashboard/user'><FaHome></FaHome><a>User Home</a></NavLink></li>
          <li><NavLink to='/dashboard/reservation'><FaBookmark></FaBookmark><a>Reservation</a></NavLink></li>
          <li><NavLink to='/dashboard/payment'><FaMoneyCheckAlt></FaMoneyCheckAlt><a>Payment History</a></NavLink></li>
          <li><NavLink to='/dashboard/myCart'><FaCartPlus></FaCartPlus><a>My Cart <div className="badge badge-primary">{cart?.length || 0}</div></a></NavLink></li>
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
