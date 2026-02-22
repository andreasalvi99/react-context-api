import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mode, setMode] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container-fluid">
        <img
          src="https://png.pngtree.com/png-clipart/20250416/original/pngtree-clothing-store-png-image_20700949.png"
          alt=""
          className="navbar-logo"
        />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <span className="fs-5">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                <span className="fs-5">About us</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/products" className="nav-link">
                <span className="fs-5">Products</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input
            value={mode}
            onClick={(e) => setMode(e.target.checked)}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
          <label
            className="form-check-label text-dark"
            htmlFor="switchCheckDefault"
          >
            Budget Mode: {mode === true ? "On" : "Off"}
          </label>
        </div>
      </div>
    </nav>
  );
}
