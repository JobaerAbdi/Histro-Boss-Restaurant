import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {loading, user} = useAuth();
    const {isAdminLoading, isAdmin} = useAdmin();

     if(loading || isAdminLoading){
        return <progress className="progress w-56 mt-20"></progress>
     };

     if(user || isAdmin){
        return children
     };
    
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    
};

export default AdminRoute;