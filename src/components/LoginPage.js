import React, {Component} from 'react';
import sideImg from '../img/BulkMailerReverse.svg';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //dynamically adds the object wrt name field
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.pwd);
    }
    
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
                        <form onSubmit={this.onSubmit}>
                            <div className="d-flex justify-content-center flex-column">
                                <div className="form-group">
                                    <label htmlFor="email" className="login-form-labels">Email:</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Enter email" 
                                        name="email"
                                        value={this.state.email || ''}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd" className="login-form-labels">Password:</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pwd" 
                                    placeholder="Enter password" 
                                    name="pwd"
                                    value={this.state.pwd || ''}
                                    onChange={this.onChange} />
                                </div>
                                
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