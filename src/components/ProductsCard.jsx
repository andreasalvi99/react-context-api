import { Link } from "react-router-dom";

export default function ProductsCard({ id, image, title, price }) {
  return (
    <div className="col">
      <div className="card h-100 d-flex flex-column">
        <Link
          to={"/products/" + id}
          className="text-decoration-none link-body-emphasis flex-grow-1"
        >
          <figure className="p-2 flex-grow-1 align-self-center img-container">
            <img src={image} className="card-img-top product-img" alt={title} />
          </figure>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title">{title}</h5>
          </div>
        </Link>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fs-6">&euro;{price}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
