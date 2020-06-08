import React, {Component} from 'react';
import sideImg from '../img/BulkMailer.svg';
import { Link } from 'react-router-dom';

class SignupPage extends Component {
    render() {
        return(
            <div className="signup-root">
                <div className="signup-div">
                    <div className="signup-form-div">
                        <h4 className="signup-heading signup-form-labels">Create an account</h4>
                        <hr className="signup-hr"/>
                        <form>
                            <div className="d-flex justify-content-center flex-column">
                                <div className="form-group">
                                    <label htmlFor="email" className="signup-form-labels">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd" className="signup-form-labels">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>
                                {/* <div className="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div> */}
                                <div className="text-center"><button type="submit" className="btn btn-light w-25 mt-3">Create</button></div>
                                <div className="text-center mt-3">
                                    <h6 className="text-white">Already have an account ? 
                                        <Link to='/login'><span className="signup-form-labels">Login</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="signup-aside" style={{backgroundImage:`url(${sideImg})`}}>
                        {/* <h1>Hello</h1> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;