import React from "react";
class Navbar2 extends React.Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.props.mode}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Word Counter App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <span className="navbar-text" >
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    onClick={this.props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label" 
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Enable dark Mode
                  </label>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar2;
