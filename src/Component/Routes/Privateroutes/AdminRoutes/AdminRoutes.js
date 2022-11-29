import React, { useContext } from 'react';
import { LoaderIcon } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useAdmin from '../../../pages/useadmin/Useadmin';

const AdminRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
const [isAdmin,isAdminloading]=useAdmin(user?.email);


    const location=useLocation();
    if(loading ||isAdminloading){
        return <LoaderIcon></LoaderIcon>
    }
    if(user&& isAdmin){
        return children;
      
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default AdminRoutes;