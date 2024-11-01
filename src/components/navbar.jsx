import React, { Component } from "react";
class Navbar extends Component {
  render() {
    const { lists, onSelectList, selectedList } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {lists.map((item) => (
                <span
                  onClick={() => onSelectList(item)}
                  key={item}
                  className={
                    selectedList === item ? "nav-link active" : "nav-link"
                  }
                >
                  {item.toUpperCase().replace("_", " ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
