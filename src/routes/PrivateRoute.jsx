import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loading, user} = useAuth();

     if(loading){
        return <progress className="progress w-56 mt-20"></progress>
     };

     if(user && user?.email){
        return children
     };
    
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    
};

export default PrivateRoute;