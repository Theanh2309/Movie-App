// NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 inline-block text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
