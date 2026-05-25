import React from "react";
import EventCard from "./EventCard";

export default function EventList({ events = [] }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(min(24rem,100%),1fr))] gap-6 p-4 md:p-20'>
      {[...events]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
    </div>
  );
}
