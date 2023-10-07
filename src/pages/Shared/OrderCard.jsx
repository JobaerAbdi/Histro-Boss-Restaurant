import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const OrderCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (foodItem) => {
    if (user && user?.email) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
             refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Item Added successful",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <img src={image} alt="Shoes" className="rounded-xl" />
      <p className="bg-slate-800 text-white absolute p-2 right-0 mt-5 mr-5">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        {/* <div className="card-actions">
          <Button name={"Add to cart"}></Button>
        </div> */}
        <div>
            <p
              className="btn btn-outline border-0 border-b-4 bg-slate-200 border-orange-600 mb-16"
              onClick={() => handleAddToCart(item)}
            >
              Add To Cart
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
