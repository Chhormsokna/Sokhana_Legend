import CinemaCard from "./Cinemacard";

function CinemaList({ cinemas }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cinemas.map((cinema) => (
        <CinemaCard
          key={cinema.id}
          cinema={cinema}
        />
      ))}
    </div>
  );
}

export default CinemaList;