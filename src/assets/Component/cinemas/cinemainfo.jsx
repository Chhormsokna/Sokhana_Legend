import {
  MapPin,
  Clock,
} from "lucide-react";

function CinemaInfo({ cinema }) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold">
        {cinema.name}
      </h2>

      <div className="mt-5 space-y-4 text-sm text-gray-400">
        <div className="flex gap-3">
          <MapPin className="shrink-0" />
          <span>{cinema.address}</span>
        </div>

        <div className="flex gap-3">
          <Clock className="shrink-0" />
          <span>{cinema.openingHours}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 font-semibold">
          Facilities
        </h3>

        <div className="flex flex-wrap gap-2">
          {cinema.facilities.map(
            (facility) => (
              <span
                key={facility}
                className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300"
              >
                {facility}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CinemaInfo;