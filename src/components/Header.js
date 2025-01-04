import React from "react";

function Header({ search, setSearch, handleSearch }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="navbar-brand text-light fw-bold">Animation</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="ابحث . . ."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              بحث
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
