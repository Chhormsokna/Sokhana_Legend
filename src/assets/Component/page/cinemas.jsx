import { useState } from "react";

import cinemas from "../data/cinemas";
import CinemaList from "../cinemas/Cinemalist";

function Cinemas() {
  const [location, setLocation] = useState("");

  const filteredCinemas = cinemas.filter(
    (cinema) =>
      !location ||
      cinema.location === location
  );

  const locations = [
    ...new Set(
      cinemas.map((cinema) => cinema.location)
    ),
  ];

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Find Your Cinema
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Our Cinemas
        </h1>

        <p className="mt-3 text-gray-400">
          Find a cinema near you.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setLocation("")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            !location
              ? "bg-cinema-600"
              : "bg-white/10"
          }`}
        >
          All
        </button>

        {locations.map((item) => (
          <button
            key={item}
            onClick={() => setLocation(item)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              location === item
                ? "bg-cinema-600"
                : "bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <CinemaList cinemas={filteredCinemas} />
    </div>
  );
}

export default Cinemas;