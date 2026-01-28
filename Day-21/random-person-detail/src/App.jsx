import { useEffect, useState } from 'react';
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeInfo, setActiveInfo] = useState("");

  // Fetch user data
  const fetchUser = async () => {
    setLoading(true);
    setActiveInfo("");
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount (componentDidMount)
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <div className="app">
      <div className="card">
        <div className="card-header">
          <img src={user.picture.large} alt="profile" />
        </div>

        <h2>{fullName}</h2>

        <div className="icons">
          <span onMouseEnter={() => setActiveInfo(user.login.username)}>👤</span>
          <span onMouseEnter={() => setActiveInfo(user.email)}>📧</span>
          <span
            onMouseEnter={() =>
              setActiveInfo(`${user.location.city}, ${user.location.country}`)
            }
          >
            📍
          </span>
          <span onMouseEnter={() => setActiveInfo(user.phone)}>📞</span>
          <span
            onMouseEnter={() =>
              setActiveInfo(
                new Date(user.registered.date).toDateString()
              )
            }
          >
            📅
          </span>
        </div>

        <p className="info">{activeInfo || "Hover over an icon"}</p>

        <button onClick={fetchUser}>Get Random Person</button>
      </div>
    </div>
  );
}
