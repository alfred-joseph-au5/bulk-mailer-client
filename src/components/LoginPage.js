import React, {Component} from 'react';
import sideImg from '../img/BulkMailerReverse.svg';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return(
            <div className="login-root">
                <div className="login-div">
                    <div className="login-aside" style={{backgroundImage:`url(${sideImg})`}}>
                        {/* <h1>Hello</h1> */}
                    </div>
                    <div className="login-form-div">
                        <h4 className="login-heading login-form-labels">Login</h4>
                        <hr className="login-hr"/>
                        <form>
                            <div className="d-flex justify-content-center flex-column">
                                <div className="form-group">
                                    <label htmlFor="email" className="login-form-labels">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd" className="login-form-labels">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>
                                {/* <div className="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div> */}
                                <div className="text-center"><button type="submit" className="btn btn-light w-25 mt-3">Sign In</button></div>
                                <div className="text-center mt-3">
                                    <h6 className="text-white">Don't have an account ? 
                                        <Link to='/signup'><span className="login-form-labels">Signup</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;