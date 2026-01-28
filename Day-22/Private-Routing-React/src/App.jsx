import { createContext, useContext, useState } from "react";
import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./app.css";

/* ================= AUTH CONTEXT ================= */

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

/* ================= PRIVATE ROUTE ================= */

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

/* ================= PAGES ================= */

function Home() {
  return <h2>🏠 Home Page (Public)</h2>;
}

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>🔐 Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h2>📊 Dashboard (Protected)</h2>;
}

/* ================= NAVIGATION ================= */

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {!isAuthenticated ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <AuthProvider>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<h2>404 | Page Not Found</h2>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
