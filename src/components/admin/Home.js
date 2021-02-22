import React, {Component} from "react";
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTachometerAlt, faColumns, faAngleDown, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import jQuery from "jquery";
import Homepage from "./Homepage";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import InsertData from "./InsertData";

class AdminHome extends Component {

    componentDidMount(): void {

        jQuery(document).ready(function ($) {
            // Add active state to sidbar nav links
            const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
            $("#layoutSidenav_nav .sb-sidenav .nav-link").each(function () {
                if (this.href === path) {
                    $(this).addClass("active");
                }
            });

            // Toggle the side navigation
            $("#sidebarToggle").on("click", function (e) {
                e.preventDefault();
                $("body").toggleClass("sb-sidenav-toggled");
            });
        });
    }

    render(): React.ReactNode {
        return (
            <div className="sb-nav-fixed" >
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/NewsApp/admin">Administrator</Link>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" ><i
                        className="fas fa-bars"><FontAwesomeIcon icon={faBars}/></i></button>

                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search"
                                   aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button"><i className="fas fa-search"><FontAwesomeIcon icon={faSearch}/></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="userDropdown" to="/NewsApp/admin" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                className="fas fa-user fa-fw"><FontAwesomeIcon icon={faUser}/></i></Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="#">Settings</Link>
                                <Link className="dropdown-item" to="#">Activity Log</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="login.html">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu" style={{textAlign: 'left'}}>
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <Link className="nav-link" to={"/NewsApp/admin"}>
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"><FontAwesomeIcon icon={faTachometerAlt}/></i>
                                        </div>
                                        Dashboard
                                    </Link>
                                    <div className="sb-sidenav-menu-heading">Interface</div>
                                    <Link className="nav-link collapsed" to={"#"} data-toggle="collapse"
                                       data-target="#collapseLayouts" aria-expanded="false"
                                       aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns"><FontAwesomeIcon icon={faColumns}/></i></div>
                                        Manager
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"><FontAwesomeIcon icon={faAngleDown}/></i>
                                        </div>
                                    </Link>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                                         data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/NewsApp/admin/add">Add news</Link>
                                            <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                                        </nav>
                                    </div>
                                    <Link className="nav-link collapsed" to="#" data-toggle="collapse"
                                       data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                        Pages
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"><FontAwesomeIcon icon={faAngleDown}/></i>
                                        </div>
                                    </Link>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                         data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion"
                                             id="sidenavAccordionPages">
                                            <Link className="nav-link collapsed" to="#" data-toggle="collapse"
                                               data-target="#pagesCollapseAuth" aria-expanded="false"
                                               aria-controls="pagesCollapseAuth">
                                                Authentication
                                                <div className="sb-sidenav-collapse-arrow"><i
                                                    className="fas fa-angle-down"></i></div>
                                            </Link>
                                            <div className="collapse" id="pagesCollapseAuth"
                                                 aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <Link className="nav-link" to="login.html">Login</Link>
                                                    <Link className="nav-link" to="register.html">Register</Link>
                                                    <Link className="nav-link" to="password.html">Forgot Password</Link>
                                                </nav>
                                            </div>
                                            <Link className="nav-link collapsed" to="#" data-toggle="collapse"
                                               data-target="#pagesCollapseError" aria-expanded="false"
                                               aria-controls="pagesCollapseError">
                                                Error
                                                <div className="sb-sidenav-collapse-arrow"><i
                                                    className="fas fa-angle-down"><FontAwesomeIcon icon={faAngleDown}/></i></div>
                                            </Link>
                                            <div className="collapse" id="pagesCollapseError"
                                                 aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="401.html">401 Page</a>
                                                    <a className="nav-link" href="404.html">404 Page</a>
                                                    <a className="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading">Addons</div>
                                    <Link className="nav-link" to="charts.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                        Charts
                                    </Link>
                                    <Link className="nav-link" to="tables.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                        Tables
                                    </Link>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                                Minh Tri
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <Homepage/>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; NewsApp 2021</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;