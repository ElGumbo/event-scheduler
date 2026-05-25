import { useState } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../utils/auth";
import { apiFetch } from "../utils/api";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
  });
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
      const response = await apiFetch("/api/events", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          date: new Date(formData.date).toISOString(),
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude),
        }),
      });

      const data = await response.json();

      if (response.status === 400) throw new Error(data.error);
      if (!response.ok) throw new Error("Event konnte nicht erstellt werden");

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='card bg-base-100 w-full max-w-lg m-auto shadow-sm'>
      <div className='card-body'>
        <h2 className='card-title'>Event erstellen</h2>

        {error && <div className='alert alert-error'>{error}</div>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            name='title'
            placeholder='Titel'
            className='input input-bordered w-full'
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name='description'
            placeholder='Beschreibung'
            className='textarea textarea-bordered w-full'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type='date'
            name='date'
            className='input input-bordered w-full'
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='location'
            placeholder='Adresse'
            className='input input-bordered w-full'
            value={formData.location}
            onChange={handleChange}
            required
          />
          <div className='flex gap-2'>
            <input
              type='number'
              name='latitude'
              placeholder='Latitude'
              className='input input-bordered w-full'
              value={formData.latitude}
              onChange={handleChange}
              step='any'
              required
            />
            <input
              type='number'
              name='longitude'
              placeholder='Longitude'
              className='input input-bordered w-full'
              value={formData.longitude}
              onChange={handleChange}
              step='any'
              required
            />
          </div>

          <button
            type='submit'
            className='btn btn-primary w-full'
            disabled={loading}
          >
            {loading ? (
              <span className='loading loading-spinner' />
            ) : (
              "Event erstellen"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
