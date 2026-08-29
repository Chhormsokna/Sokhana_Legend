import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 text-center">
      <div>
        <p className="text-8xl font-black text-cinema-600">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The page you're looking for doesn't exist.
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

export default NotFound;