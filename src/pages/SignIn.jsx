import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignIn({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 403) throw new Error("E-Mail oder Passwort falsch");
      if (response.status === 400) throw new Error(data.error);
      if (!response.ok) throw new Error("Login fehlgeschlagen");

      localStorage.setItem("token", data.token);

      onLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm m-auto shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Anmelden</h2>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? <span className="loading loading-spinner" /> : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}