import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const {user} = useContext(AuthContext)
  // console.log(cart);
  const  price= cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = parseFloat(price).toFixed(2)

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              refetch()
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full ml-10">
      <SectionTitle
        subHeading={"My Cart"}
        heading={"Wanna Add More?"}
      ></SectionTitle>
      <div className="flex justify-between items-center bg-zinc-200 px-4 w-full my-6">
        <h1 className="text-1xl font-bold uppercase">
          Total Order: {cart?.length}
        </h1>
        <h1 className="text-1xl font-bold uppercase">
          Total Price: ${totalPrice}
        </h1>
        <h1 className="text-1xl font-bold">
          User Email: {user?.email}
        </h1>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#D1A054]">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-fuchsia-300">
            {cart.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>$ {item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-warning"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
