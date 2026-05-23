import React from "react";
import EventCard from "./EventCard";

export default function EventList({ events = [] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-6 p-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
