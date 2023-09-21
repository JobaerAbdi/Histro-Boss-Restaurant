import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <Link to='/'><li className="mr-5">Home</li></Link>
      <Link to='/category'><li className="mr-5">Category</li></Link>
      <Link><li className="mr-5">Menu</li></Link>
      <Link><li className="mr-5">Features</li></Link>
      <Link><li className="mr-5">Testimonials</li></Link>
      <Link><li className="mr-5">LogIn</li></Link>
      <Link><li className="mr-5">LogOut</li></Link>
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
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
