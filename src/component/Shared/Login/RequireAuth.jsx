/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import  { AuthContext } from "../../../Hooks/AuthProvider";
import Loading from "../Loading/Loading";


const RequireAuth = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login"
            state={{ form: location }}
            replace
        ></Navigate>
    }
    return children;
};

export default RequireAuth;