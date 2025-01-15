// import { useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';  // Correct import
// import AuthContext from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const { user, logoutUser } = useContext(AuthContext);
//   const token = localStorage.getItem("authTokens");

//   if (token) {
//     const decoded = jwtDecode(token);  // Changed to jwtDecode (correct function name)
//     var user_id = decoded.user_id;
//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img style={{ width: "120px", padding: "6px" }} src="https://i.imgur.com/juL1aAc.png" alt="" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               {token === null &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/login">Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register">Register</Link>
//                   </li>
//                 </>
//               }

//               {token !== null &&
//                 <>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/dashboard">Dashboard</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Logout</a>
//                   </li>
//                 </>
//               }

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import { useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Use named import
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  let user_id = null; // Initialize user_id to avoid reference errors
  if (token) {
    try {
      const decoded = jwtDecode(token);
      user_id = decoded.user_id;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  console.log("Token in Navbar:", token); // Debugging line

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            style={{
              width: "80px",      // Adjusted width for smaller logo
              height: "auto",     // Maintain aspect ratio
              padding: "0",       // Removed extra padding
              display: "block",   // Prevent unwanted margin/padding space around the image
              margin: "0"         // Remove any additional margins
            }}
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
          />
        </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={token ? "/dashboard" : "/"}
                >
                  Home
                </Link>
              </li>
              {token === null && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {token !== null && (
                <>
                  {/* Profile Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="profileDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                      <li>
                        <Link className="dropdown-item" to="/profile/view">
                          View Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile/edit">
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile/risk">
                          Risk Assessment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile/goals">
                          Financial Goals
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Assets & Portfolio Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="assetsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Assets & Portfolio
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="assetsDropdown">
                      <li>
                        <Link className="dropdown-item" to="/assets/add">
                          Add Asset
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/portfolio">
                          View Portfolio Summary
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/assets/monitor">
                          Monitor Performance
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Goals Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="goalsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Goals
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="goalsDropdown">
                      <li>
                        <Link className="dropdown-item" to="/goals/add-edit">
                          Add/Edit Goals
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/goals/track">
                          Track Milestones
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Suggestions */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/suggestions">
                      Suggestions
                    </Link>
                  </li>

                  {/* Reports */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/reports">
                      Reports
                    </Link>
                  </li>

                  {/* Logout */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={logoutUser}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
