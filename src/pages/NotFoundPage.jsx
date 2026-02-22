import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        <p>404 - Not Found</p>
      </div>
      <button className="btn btn-primary">
        <Link
          className="text-decoration-none link-body-emphasis text-white"
          to={"/"}
        >
          Torna alla Home
        </Link>
      </button>
    </>
  );
}
