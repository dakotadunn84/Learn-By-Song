import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand bg-dark">
        <div class="container-fluid">
          <Navbar color="dark" dark>
            <NavbarBrand href="/Learn-By-Song/home">Learn By Song</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret nav>
                    Songs
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/Learn-By-Song/Eloping_to_the_moon">
                        私奔到月球 Eloping to the Moon
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/Learn-By-Song/I_want_your_love">
                        我要你的爱 I want your love
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
