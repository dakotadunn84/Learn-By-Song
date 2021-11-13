import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function Navigation(props) {
  return (
    <div>
      <nav class="navbar-expand bg-dark">
        <div>
          <Navbar color="dark" dark>
            <NavbarBrand href="/Learn-By-Song/">Learn By Song</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav navbar>
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
