// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import useAxios from '../utils/useAxios';
// import Notifications from '../components/Notifications';
// import DataVisualization from '../components/DataVisualization';
// import GoalProgressChart from '../components/GoalProgressChart';
// import AssetPerformanceGraph from '../components/AssetPerformanceGraph';
// import FinancialNews from '../components/FinancialNews';
// import swal from 'sweetalert2';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [assets, setAssets] = useState([]);
//   const [financialGoals, setFinancialGoals] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const axios = useAxios();

//   useEffect(() => {
//     Promise.all([
//       axios.get('/user/profile'),
//       axios.get('/user/assets'),
//       axios.get('/user/goals'),
//       axios.get('/notifications'),
//     ])
//       .then(([userResponse, assetsResponse, goalsResponse, notificationsResponse]) => {
//         setUser(userResponse.data);
//         setAssets(assetsResponse.data);
//         setFinancialGoals(goalsResponse.data);
//         setNotifications(notificationsResponse.data);
//       })
//       .catch(error => {
//         console.error(error);
//         swal.fire({
//           title: "An error occurred",
//           text: "Unable to load the data. Please try again later.",
//           icon: "error",
//           toast: true,
//           timer: 6000,
//           position: "top-right",
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .finally(() => setLoading(false));
//   }, [axios]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-sidebar">
//         <h2>AURUM - Dashboard</h2>
//         <ul>
//           <li><Link to="/profile/view">View Profile</Link></li>
//           <li><Link to="/assets/add">Add Asset</Link></li>
//           <li><Link to="/portfolio">Portfolio Summary</Link></li>
//           <li><Link to="/goals/add-edit">Add Goal</Link></li>
//           <li><Link to="/suggestions">Investment Suggestions</Link></li>
//           <li><Link to="/reports">Generate Report</Link></li>
//         </ul>
//       </div>

//       <div className="dashboard-main">
//         {/* User Profile Section */}
//         <section className="user-profile">
//           <h3>Welcome, {user?.name || 'User'}</h3>
//           <p>Email: {user?.email}</p>
//           <p>Risk Tolerance: {user?.riskLevel}</p>
//           <p>Financial Goals: {financialGoals?.length || 0}</p>
//           <p>Assets: {assets?.length || 0}</p>
//           <Link to="/profile/edit">Edit Profile</Link>
//         </section>

//         {/* Asset and Portfolio Management Section */}
//         <section className="asset-portfolio-management">
//           <h3>Asset and Portfolio Overview</h3>
//           <div className="asset-summary">
//             <h4>Total Portfolio Value</h4>
//             <p>${assets.reduce((sum, asset) => sum + asset.value, 0).toFixed(2)}</p>
//           </div>
//           <div className="asset-performance">
//             <h4>Asset Performance</h4>
//             <AssetPerformanceGraph assets={assets} />
//           </div>
//         </section>

//         {/* Financial Goals Section */}
//         <section className="financial-goals">
//           <h3>Financial Goal Progress</h3>
//           <GoalProgressChart goals={financialGoals} />
//           <div className="goal-summary">
//             {financialGoals.map((goal, index) => (
//               <div key={index} className="goal-card">
//                 <h4>{goal.title}</h4>
//                 <p>Target Amount: ${goal.targetAmount}</p>
//                 <p>Progress: {goal.progress}%</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Notifications Section */}
//         <section className="notifications-section">
//           <h3>Notifications</h3>
//           <Notifications notifications={notifications} />
//         </section>

//         {/* Customized Suggestions Section */}
//         <section className="investment-suggestions">
//           <h3>Investment Suggestions</h3>
//           <Link to="/suggestions">Get Investment Suggestions</Link>
//         </section>

//         {/* Reporting Section */}
//         <section className="reporting-section">
//           <h3>Reports</h3>
//           <Link to="/reports">Generate Report</Link>
//         </section>

//         {/* Financial News Section */}
//         <section className="financial-news-section">
//           <h3>Latest Financial News</h3>
//           <FinancialNews />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  const[res, setRes] = useState("")
  const token = localStorage.getItem("authTokens")
  const [user, setUser] = useState(null);
  const [assets, setAssets] = useState([]);
  const [financialGoals, setFinancialGoals] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const api = useAxios();

  if(token){
    const decode = jwtDecode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
  }

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await api.get("/test/")
        setRes(response.data.response)
      }catch(error){
        console.log(error);
        setRes("Something went wrong")
      }
      }
      fetchData()
  }, [])

  useEffect(() => {
    const fetchPostData = async () =>{
      try{
        const response = await api.post("/test/")
        setRes(response.data.response)
      }catch(error){
        console.log(error);
        setRes("Something went wrong")
      }
      }
      fetchPostData()
  }, [])


  return (
    <div className="dashboard-container" style={{marginTop: "100px"}}>
      <div className="dashboard-sidebar">
        <h2>AURUM - Dashboard</h2>
      </div>

      <div className="dashboard-main">
        <div className = 'alert alert-success'>
          <strong>{res}</strong>
          </div>
        
        {/* User Profile Section */}
        <section className="user-profile">
          <h3>Welcome, {username}</h3>
          <p>Email: {user?.email}</p>
          <p>Risk Tolerance: {user?.riskLevel}</p>
          <p>Financial Goals: {financialGoals.length}</p>
          <p>Assets: {assets.length}</p>
          <Link to="/profile/edit">Edit Profile</Link>
        </section>

        {/* Asset and Portfolio Management Section */}
        <section className="asset-portfolio-management">
          <h3>Asset and Portfolio Overview</h3>
          <div className="asset-summary">
            <h4>Total Portfolio Value</h4>
            <p>${assets.reduce((sum, asset) => sum + asset.value, 0).toFixed(2)}</p>
          </div>
          {/* Asset Performance Graph component is commented out */}
        </section>

        {/* Financial Goals Section */}
        <section className="financial-goals">
          <h3>Financial Goal Progress</h3>
          {/* Financial Goal Progress Chart component is commented out */}
          <div className="goal-summary">
            {financialGoals.map((goal, index) => (
              <div key={index} className="goal-card">
                <h4>{goal.title}</h4>
                <p>Target Amount: ${goal.targetAmount}</p>
                <p>Progress: {goal.progress}%</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications Section */}
        <section className="notifications-section">
          <h3>Notifications</h3>
          {/* Notifications component is commented out */}
        </section>

        {/* Customized Suggestions Section */}
        <section className="investment-suggestions">
          <h3>Investment Suggestions</h3>
          <Link to="/suggestions">Get Investment Suggestions</Link>
        </section>

        {/* Reporting Section */}
        <section className="reporting-section">
          <h3>Reports</h3>
          <Link to="/reports">Generate Report</Link>
        </section>

        {/* Financial News Section */}
        <section className="financial-news-section">
          <h3>Latest Financial News</h3>
          {/* Financial News component is commented out */}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
