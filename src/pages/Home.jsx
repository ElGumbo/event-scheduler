import React, { useEffect, useState } from "react";
import EventList from "../components/events/EventList";

export default function Home() {
  const [eventApiData, setEventApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/events");
      const data = await response.json();
      setEventApiData(data.results);
    };
    fetchData();
  }, []);

  if (!eventApiData) return <p>Loading...</p>;

  console.log(eventApiData);
  return (
    <div>
      <EventList events={eventApiData} />
    </div>
  );
}
