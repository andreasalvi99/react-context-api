import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorInfo, setErrorInfo] = useState();
  const navigate = useNavigate();

  const prevButton = () => {
    navigate(`/products/${parseInt(id) - 1}`);
  };

  const nextButton = () => {
    navigate(`/products/${parseInt(id) + 1}`);
  };

  const closeButton = () => {
    navigate(`/products`);
  };

  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setIsLoading(false);
        setDetails(response.data);
      })
      .catch((error) => {
        setErrorAlert(true);
        setErrorInfo(error.message);
      });
  };

  useEffect(fetchProductDetail, [id]);

  if (errorAlert)
    return (
      <div className="alert alert-danger" role="alert">
        {errorInfo}
      </div>
    );

  if (!details & !isLoading)
    return (
      <>
        <div className="alert alert-danger" role="alert">
          Nessun articolo disponibile
        </div>
        <button className="btn btn-primary">
          <Link
            className="text-decoration-none link-body-emphasis text-white"
            to={"/products"}
          >
            Torna a Proucts
          </Link>
        </button>
      </>
    );

  return (
    <>
      {isLoading ? (
        <div className="layover">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center gap-4 p-5 position-relative product-info">
          <div
            className="close-button position-absolute top-0 start-100 translate-middle fs-3 pe-auto"
            onClick={closeButton}
          >
            <i class="bi bi-x-lg"></i>
          </div>
          <button
            onClick={prevButton}
            disabled={id <= 1}
            className="btn btn-light"
          >
            <i className="bi bi-arrow-left d-inline-block"></i>
          </button>

          <div className="d-flex justify-content-around bg-body-tertiary text-dark rounded">
            <figure className="p-4">
              <img src={details.image} alt={details.title} />
            </figure>
            <div className="align-self-center p-3">
              <h5 className="mt-4">{details.title}</h5>
              <p>{details.description}</p>
              <p>
                <span className="badge rounded-pill text-bg-success fs-6">
                  Rating: {" " + details.rating.rate}/5
                </span>
              </p>
              <p>&euro;{details.price}</p>
            </div>
          </div>

          <button
            onClick={nextButton}
            disabled={id >= 20}
            className="btn btn-light"
          >
            <i className="bi bi-arrow-right d-inline-block"></i>
          </button>
        </div>
      )}
    </>
  );
}
