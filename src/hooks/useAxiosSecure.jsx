import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
});
 
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()

    useEffect((
        axiosSecure.interceptors.request.use((request)=> {
            const token = localStorage.getItem('access-token')
            if(token){
                request.headers.authorization = `Bearer ${token}`
            }
            return request;
          });
        
        axiosSecure.interceptors.response.use((response)=> {
            return response;
          }, async(error)=> {
            console.log('My error',error)
            if(error.response && (error?.response.status === 401 || error?.response.status === 403)){
                // toast.error(error?.response?.data.error)
                // Swal.fire(
                //     'Wrong User'
                //   )
                await logOut();
                navigate('/login');
            }
          });
    },[logOut, navigate])
    return [axiosSecure]
};

export default useAxiosSecure;