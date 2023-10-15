// import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const AllUser = () => {
  // const {loading} = useAuth();
  
  // const { data: users = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/users");
  //     return res.json();
  //   },
  // });

  const [users, refetch] = useUser();

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user?.name} is an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure to want delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/users/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user?.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full ml-10">
      <SectionTitle
        heading={"Manage all users"}
        subHeading={"How many??"}
      ></SectionTitle>
      <h1 className="text-2xl font-bold">Total Users: {users?.length}</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-black text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button className="btn btn-sm text-white bg-black">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn text-white bg-orange-400"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
