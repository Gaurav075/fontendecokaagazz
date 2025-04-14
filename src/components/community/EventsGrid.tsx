type Event = {
    id: string | number;
    title: string;
    date: string;
    description: string;
    thumbnail: string;
  };
  
  const EventsGrid = ({ events }: { events: Event[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="h-60 w-full object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.date}</p>
          <p className="text-sm mt-2 text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );
  
  export default EventsGrid;
  