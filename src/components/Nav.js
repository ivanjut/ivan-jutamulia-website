import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../docs/Ivan_Jutamulia_Resume.pdf';
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse mx-auto justify-content-center">
                    <Link to='/' className="navbar-brand">Ivan Jutamulia</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/aboutme' className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/work' className="nav-link">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/education' className="nav-link">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/skills' className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href = {resumePDF} target = "_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;