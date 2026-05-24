import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function EventDetails() {
  const [eventData, setEventData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/api/events/${slug}`);
      const data = await response.json();
      setEventData(data);
    };
    fetchData();
  }, [slug]);


  if (!eventData) return <p>Loading...</p>;

  return (
    <div className='card bg-base-100 w-150 h-full m-auto shadow-sm'>
      <div className='card-body'>
        <h2 className='card-title'>{eventData.title}</h2>
        <div className='flex flex-row justify-between'>
          <span>{eventData.location}</span>
          <span>{new Date(eventData.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}</span>
        </div>
        <p>
          {eventData.description}
        </p>
      </div>
    </div>
  );
}
