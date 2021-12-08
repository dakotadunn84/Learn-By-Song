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

class Navigation extends React.Component {
  render() {
    return  (
      <div>
        <nav className="navbar-expand bg-dark">
          <div className="row d-flex justify-content-center">
            <Navbar color="dark" dark>
              <NavbarBrand href="/Learn-By-Song/">Learn By Song</NavbarBrand>
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse navbar>
                <Nav navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle caret nav className="text-white">
                      Songs
                    </DropdownToggle>
                    <DropdownMenu className="bg-dark text-white">
                      <DropdownItem>
                        <Link to="/Learn-By-Song/Eloping_to_the_moon" className="text-white">
                          私奔到月球 Eloping to the Moon
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/Learn-By-Song/I_want_your_love" className="text-white" test2={this.props.test} testcreatedinnav="test created in nav">
                          我要你的爱 I want your love
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
              <Collapse navbar className="bg-dark text-white">
                <Nav navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle caret nav className="text-white">
                      Vocabulary
                    </DropdownToggle>
                    <DropdownMenu className="bg-dark text-white">
                    <DropdownItem className="text-white">HSK 2</DropdownItem>
                      <DropdownItem>
                        <Link to="/Learn-By-Song/HSK_1" className="text-white">
                          HSK 2.0 Level 1
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/Learn-By-Song/HSK_2" className="text-white">
                          HSK 2.0 Level 2
                        </Link>
                      </DropdownItem>
                      <DropdownItem divider />
                        
                      <DropdownItem className="text-white">HSK 3.0 (2021)</DropdownItem>
                      <DropdownItem>
                        <Link to="/Learn-By-Song/HSK_3_Level_1" className="text-white">
                          HSK 3.0 Level 1
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/Learn-By-Song/HSK_3_Level_2" className="text-white">
                          HSK 3.0 Level 2
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
}




export default withRouter(Navigation);
