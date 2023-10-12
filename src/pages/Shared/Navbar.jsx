import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const [cart, refetch] = useCart();
  
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLink = (
    <>
      <Link to="/">
        <li className="mr-5">Home</li>
      </Link>
      <Link to="/menu">
        <li className="mr-5">Menu</li>
      </Link>
      <Link to="/order/offered">
        <li className="mr-5">Order</li>
      </Link>
      <Link to="/dashboard">
        <li className="mr-5">Dashboard</li>
      </Link>
      <Link to="/">
        <li className="mr-5">{user?.displayName}</li>
      </Link>
      <Link to="/">
        <li className="mr-5">{user?.email}</li>
      </Link>
      <Link to="/dashboard/mycart">
        <button className="btn btn-sm mr-4 btn-primary">
          <FaCartPlus />
          <span className="badge badge-info mr-4">+{cart?.length || 0}</span>
        </button>
      </Link>
      

      {/* {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        } */}

      {user && user?.email ? (
        // <p onClick={handleLogout}><Link><li className="mr-5">LogOut</li></Link></p>
        <>
          <Link>
            <li className="mr-5" onClick={handleLogout}>
              LogOut
            </li>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <li className="mr-5">LogIn</li>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-purple-800 text-white bg-opacity-40 fixed z-10 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Histro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
