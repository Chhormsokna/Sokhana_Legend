import { Link } from "react-router-dom";

function Ticket() {
  return (
    <div className="container-cinema py-24 text-center">
      <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-zinc-900 p-8">
        <div className="text-5xl">🎫</div>

        <h1 className="mt-5 text-3xl font-black">
          Your Ticket
        </h1>

        <p className="mt-3 text-gray-400">
          Your digital ticket will appear here after
          completing a booking.
        </p>

        <Link
          to="/"
          className="cinema-button mt-7"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Ticket;