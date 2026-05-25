import React, { useEffect, useState } from "react";
import EventList from "../components/events/EventList";
import { apiFetch } from "../utils/api";

export default function Home() {
  const [eventApiData, setEventApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiFetch("/api/events");
      const data = await response.json();
      setEventApiData(data.results);
    };
    fetchData();
  }, []);

  if (!eventApiData) return <p>Loading...</p>;

  return (
    <div>
      <EventList events={eventApiData} />
    </div>
  );
}
