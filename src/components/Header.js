import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

function Header() {

    return (
        <Navbar>
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/NewsApp"><sup>SpringBoot</sup> <span style={{color: '#469FFD', fontSize: 25}}><b>NEWS</b></span> <sub>React</sub></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={""}>Trang chủ
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={""}>Thể loại</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={""}>Liên hệ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={""}>Thông tin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/NewsApp/admin"}>Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );
}

export default Header;