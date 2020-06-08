import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Navi extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <Link to="/" className="navbar-brand"><span className="nav-headings">Logo</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active nav-items">
                    <Link to='/' className="nav-link"><span className="nav-headings">Home</span> <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link"><span className="nav-headings">Signup</span></Link>
                    </li>
                    {/* Hides this li element on small screens
                        https://code.luasoftware.com/tutorials/bootstrap/bootstrap-hide-element-based-on-viewport-size/
                     */}
                    <li className="nav-item d-none d-lg-block">
                        <span className="nav-link"><span className="nav-headings">/</span></span>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link"><span className="nav-headings">Login</span></Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navi;
