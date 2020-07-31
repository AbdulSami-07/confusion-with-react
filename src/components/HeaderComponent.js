import React , { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem,Nav, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : ! this.state.isNavOpen
        })
    }

    render() {
        return (
            <>      {/* short form of  React.Fragment is <> </> */}
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/" >
                            <img src="assets/images/logo.png" height="30" width="31" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav  navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> Aboutus
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contactus
                                    </NavLink>
                                </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>

                </Jumbotron>
            </>
        );
    }
}

export default Header;