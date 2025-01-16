// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// import Homepage from './views/Homepage';
// import Registerpage from './views/Registerpage';
// import Loginpage from './views/Loginpage';
// import Dashboard from './views/Dashboard';
// import Navbar from './views/Navbar';
// import PrivateRoute from './utils/PrivateRoute';
// import ProfileView from './views/ProfileView';
// import ProfileEdit from './views/ProfileEdit';
// import RiskAssessment from './views/RiskAssessment';
// import FinancialGoals from './views/FinancialGoals';
// import AssetAdd from './views/AssetAdd';
// import PortfolioSummary from './views/PortfolioSummary';
// import AssetMonitor from './views/AssetMonitor';
// import GoalsAddEdit from './views/GoalsAddEdit';
// import GoalsTrack from './views/GoalsTrack';
// import Suggestions from './views/Suggestions';
// import Reports from './views/Reports';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>  {/* Ensures auth state is available */}
//         <Navbar />  {/* Always show Navbar */}
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<Loginpage />} />
//           <Route path="/register" element={<Registerpage />} />

//           {/* Protected Routes (PrivateRoute will handle access control) */}
//           <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
//           <Route path="/profile/view" element={<PrivateRoute component={ProfileView} />} />
//           <Route path="/profile/edit" element={<PrivateRoute component={ProfileEdit} />} />
//           <Route path="/profile/risk" element={<PrivateRoute component={RiskAssessment} />} />
//           <Route path="/profile/goals" element={<PrivateRoute component={FinancialGoals} />} />

//           <Route path="/assets/add" element={<PrivateRoute component={AssetAdd} />} />
//           <Route path="/portfolio" element={<PrivateRoute component={PortfolioSummary} />} />
//           <Route path="/assets/monitor" element={<PrivateRoute component={AssetMonitor} />} />

//           <Route path="/goals/add-edit" element={<PrivateRoute component={GoalsAddEdit} />} />
//           <Route path="/goals/track" element={<PrivateRoute component={GoalsTrack} />} />

//           <Route path="/suggestions" element={<PrivateRoute component={Suggestions} />} />
//           <Route path="/reports" element={<PrivateRoute component={Reports} />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Homepage from './views/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';
import PrivateRoute from './utils/PrivateRoute';
import ProfileView from './views/ProfileView';
import ProfileEdit from './views/ProfileEdit';
import RiskAssessment from './views/RiskAssessment';
import FinancialGoals from './views/FinancialGoals';
import AssetAdd from './views/AssetAdd';
import PortfolioSummary from './views/PortfolioSummary';
import AssetMonitor from './views/AssetMonitor';
import GoalsAddEdit from './views/GoalsAddEdit';
import GoalsTrack from './views/GoalsTrack';
import Suggestions from './views/Suggestions';
import Reports from './views/Reports';

function App() {
  return (
    <Router>
      <AuthProvider>  {/* Ensures auth state is available */}
        <Navbar />  {/* Always show Navbar */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />

          {/* Protected Routes (PrivateRoute will handle access control) */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile/view" element={<PrivateRoute><ProfileView /></PrivateRoute>} />
          <Route path="/profile/edit" element={<PrivateRoute><ProfileEdit /></PrivateRoute>} />
          <Route path="/profile/risk" element={<PrivateRoute><RiskAssessment /></PrivateRoute>} />
          <Route path="/profile/goals" element={<PrivateRoute><FinancialGoals /></PrivateRoute>} />

          <Route path="/assets/add" element={<PrivateRoute><AssetAdd /></PrivateRoute>} />
          <Route path="/portfolio" element={<PrivateRoute><PortfolioSummary /></PrivateRoute>} />
          <Route path="/assets/monitor" element={<PrivateRoute><AssetMonitor /></PrivateRoute>} />

          <Route path="/goals/add-edit" element={<PrivateRoute><GoalsAddEdit /></PrivateRoute>} />
          <Route path="/goals/track" element={<PrivateRoute><GoalsTrack /></PrivateRoute>} />

          <Route path="/suggestions" element={<PrivateRoute><Suggestions /></PrivateRoute>} />
          <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
