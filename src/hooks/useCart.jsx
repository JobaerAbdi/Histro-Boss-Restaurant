import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');

    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        /* 
          queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,
            {
                headers: {
                    authorization : `Bearer ${token}`
                }
            })
            // const data = res.json()
            return res.json()
        }
        */

        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            // console.log('res form data', res);
            return res.data
        }
      });

      return [cart, refetch ]
};

export default useCart;