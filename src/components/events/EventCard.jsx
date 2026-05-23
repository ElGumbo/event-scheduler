import React from "react";

export default function EventCard({ event }) {
  return (
    <div className='card bg-base-100 w-full h-full shadow-sm'>
      <div className='card-body'>
        <h2 className='card-title'>{event.title}</h2>
        <div className='flex flex-row justify-between'>
          <span>{event.location}</span>
          <span>
            {new Date(event.date).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
        <p>{event.description}</p>
      </div>
    </div>
  );
}
