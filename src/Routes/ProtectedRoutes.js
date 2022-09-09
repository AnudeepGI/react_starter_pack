import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children,isLogin}) => {
    console.log(isLogin)
    if(!isLogin) {
      return <Navigate to="/" />
    } 
    return children;
}

export default ProtectedRoutes;