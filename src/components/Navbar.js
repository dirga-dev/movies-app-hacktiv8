import axios from "axios";
import React, { useState } from "react";

const Navbar = () => {
  const [text, setText] = useState("home");
  const [movie, setMovie] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  }

  const getMovie = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=d8d09f5d`)
      .then((res) => {
        setMovie(res.data.Search)
      })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="">LayarKaca21</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

            </ul>
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3 ">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
            movie.map((value, index) => {
              return (
                <div className="col">
                  <div className="card" style={{minHeight: "34rem"}}>
                    <img src={value.Poster} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-title">{value.Year}</p>
                        <h5 className="card-text">{value.Title}</h5>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export default Navbar;