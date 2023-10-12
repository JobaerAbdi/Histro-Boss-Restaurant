import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUser = () => {

  const {data: users=[] , refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      return res.json()
    },
  })

  return (
    <div className="w-full ml-10">
      <SectionTitle
        heading={"Manage all users"}
        subHeading={"How many??"}
      ></SectionTitle>
      <h1 className="text-2xl font-bold">Total Users: {users?.length}</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role === 'admin' ? 'admin' : <button className="btn bg-orange-400 text-white"><FaUsers></FaUsers></button>}</td>
              <td><button className="btn bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
            </tr> )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
