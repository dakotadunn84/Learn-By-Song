import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark className="bg-dark" expand="md">
          <NavbarBrand href="/Learn-By-Song/" className="mr-auto text-white">
            Learn By Song
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  Songs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link
                      to="/Learn-By-Song/I_want_your_love"
                      className="text-dark"
                      onClick={!this.state.collapsed ? this.toggleNavbar : undefined}
                    >
                      我要你的愛 I want your love
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/Learn-By-Song/Eloping_to_the_moon"
                      className="text-dark"
                      onClick={!this.state.collapsed ? this.toggleNavbar : undefined}
                    >
                      私奔到月球 Eloping to the Moon
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  HSK Levels
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/Learn-By-Song/HSK_1" className="text-dark" onClick={!this.state.collapsed ? this.toggleNavbar : undefined}>
                      HSK 2.0 Level 1
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Learn-By-Song/HSK_2" className="text-dark" onClick={!this.state.collapsed ? this.toggleNavbar : undefined}>
                      HSK 2.0 Level 2
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link
                      to="/Learn-By-Song/HSK_3_Level_1"
                      className="text-dark"
                      onClick={!this.state.collapsed ? this.toggleNavbar : undefined}
                    >
                      HSK 3.0 Level 1
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/Learn-By-Song/HSK_3_Level_2"
                      className="text-dark"
                      onClick={!this.state.collapsed ? this.toggleNavbar : undefined}
                    >
                      HSK 3.0 Level 2
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
