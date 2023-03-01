import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme={this.props.mode}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {" "}
              Word Counter
            </a>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
             >
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item mx-5 ">
                  <div className="form-check form-switch my-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Enable dark mode
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
