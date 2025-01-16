// import { Route, Navigate } from "react-router-dom"; 
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   let { user } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       element={!user ? <Navigate to="/login" /> : children} 
//     />
//   );
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom"; 
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);

  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the protected route
  return children;
};

export default PrivateRoute;

