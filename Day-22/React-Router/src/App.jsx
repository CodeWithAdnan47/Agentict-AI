import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./app.css";

/* ---------- Pages ---------- */

function Home() {
  return <h2>Welcome to Router Demo 👋</h2>;
}

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2>Users</h2>
      <ul className="list">
        {users.map(user => (
          <li key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>City: {user.address.city}</p>
    </>
  );
}

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data.quotes));
  }, []);

  return (
    <>
      <h2>Quotes</h2>
      <div className="quotes">
        {quotes.slice(0, 10).map(q => (
          <blockquote key={q.id}>
            “{q.quote}”
            <span>- {q.author}</span>
          </blockquote>
        ))}
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form className="form">
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button>Submit</button>
      </form>
    </>
  );
}

function NotFound() {
  return <h2>404 | Page Not Found</h2>;
}

/* ---------- Layout ---------- */

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Router</h1>
        <NavLink to="/" end>🏠 Home</NavLink>
        <NavLink to="/users">👥 Users</NavLink>
        <NavLink to="/quotes">💬 Quotes</NavLink>
        <NavLink to="/contact">📩 Contact</NavLink>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
