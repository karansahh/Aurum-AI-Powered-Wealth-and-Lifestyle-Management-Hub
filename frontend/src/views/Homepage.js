import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const { authTokens } = useContext(AuthContext); // Get authentication token from context
  const navigate = useNavigate();
  useEffect(() => {
    if (authTokens) {
      navigate('/dashboard', { replace: true });
    }
  }, [authTokens, navigate]);
  
  return (
    <div style={{ backgroundColor: "#1D7F32", color: "#fff", minHeight: "100vh", marginTop: "85px"}}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1D7F32" }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Aurum Logo"
              style={{
                width: "120px",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
            />
          </a>
        </div>
      </nav>

      <div className="container py-5 text-center">
        <h1 className="display-4 mb-4" style={{ fontSize: "3rem", color: "#fff", fontWeight: "bold" }}>
          Welcome to Aurum
        </h1>
        <p className="lead mb-5" style={{ fontSize: "1.25rem", color: "#fff" }}>
          The AI-powered Wealth and Lifestyle Management Hub that transforms the way you manage your finances, goals, and assets. <br />
          Unlock personalized recommendations, track your financial goals, and achieve financial freedom—all in one place.
        </p>

        {/* Call to Action to Register */}
        <Link to="/register" className="btn btn-light btn-lg text-success mb-4">
          Register Now & Start Managing Your Wealth
        </Link>

        {/* Carousel for the 7 Features */}
        <div id="featureCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Feature 1: User Account Management */}
            <div className="carousel-item active">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>User Account Management</h4>
                  <p className="card-text">
                    Easily register, authenticate, and manage your personal account. Complete your profile, verify your email, and secure your account to get started on your wealth journey.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Manage Your Account</Link>
                </div>
              </div>
            </div>

            {/* Feature 2: Asset and Portfolio Management */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Asset & Portfolio Management</h4>
                  <p className="card-text">
                    Track and manage your assets, from real estate to stocks and more. Get a total portfolio value summary and monitor individual asset performance in real-time.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Manage Your Assets</Link>
                </div>
              </div>
            </div>

            {/* Feature 3: Financial Goal Management */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Financial Goal Management</h4>
                  <p className="card-text">
                    Set, modify, and track your financial goals with built-in progress tracking. Set milestones and deadlines to achieve your wealth objectives.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Set Your Goals</Link>
                </div>
              </div>
            </div>

            {/* Feature 4: Customized Investment Suggestions */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Customized Investment Suggestions</h4>
                  <p className="card-text">
                    Get AI-driven personalized investment suggestions based on your risk tolerance and financial preferences. Maximize your portfolio growth with smart recommendations.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Get Investment Suggestions</Link>
                </div>
              </div>
            </div>

            {/* Feature 5: Notifications */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Notifications</h4>
                  <p className="card-text">
                    Stay up to date with important updates, from financial transactions to goal progress alerts. Receive timely email and in-app notifications to stay informed.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Check Notifications</Link>
                </div>
              </div>
            </div>

            {/* Feature 6: Risk Control */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Risk Control</h4>
                  <p className="card-text">
                    Set performance thresholds for your assets and receive alerts if your investments exceed risk limits. Control your financial health with proactive risk management.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">Manage Risk</Link>
                </div>
              </div>
            </div>

            {/* Feature 7: Reporting & Visualization */}
            <div className="carousel-item">
              <div className="card" style={{ borderRadius: "10px", backgroundColor: "#ffffff", color: "#333" }}>
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ color: "#1D7F32" }}>Reporting & Visualization</h4>
                  <p className="card-text">
                    Visualize your asset performance and track your financial goal progress with detailed charts and reports. Download comprehensive financial reports as PDFs or CSVs.
                  </p>
                  <Link to="/register" className="btn btn-success btn-block">View Reports</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls with custom arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featureCarousel"
            data-bs-slide="prev"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)", // Translucent background
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: "0",
              border: "none",
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {"<"}
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featureCarousel"
            data-bs-slide="next"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)", // Translucent background
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: "0",
              border: "none",
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {">"}
          </button>
        </div>

        {/* Why Register Section */}
        <div className="text-center mt-5">
          <h2 className="text-white">Why Register with Aurum?</h2>
          <p className="lead text-white mb-4">
            Register today to unlock full access to all of Aurum’s features:
          </p>
          <ul className="text-white">
            <li><strong>Personalized Financial Insights</strong> powered by AI.</li>
            <li><strong>Track Assets & Goals</strong> all in one dashboard.</li>
            <li><strong>Real-Time Performance Monitoring</strong> for smarter decision-making.</li>
            <li><strong>Risk-Based Investment Recommendations</strong> tailored to your preferences.</li>
          </ul>
          <Link to="/register" className="btn btn-light btn-lg text-success">Join Now & Start Managing Your Wealth</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


