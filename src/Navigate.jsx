import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Navigate({ count }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsscrollheight: 100 }}>
              <li className="nav-item">
                <li className="nav-link active" aria-current="page">Home</li>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-disabled="false">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
              </li>
            </ul>
            <button className="nav-link active" ><FaShoppingCart />Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigate
