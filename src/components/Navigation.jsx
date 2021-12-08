import React from "react";
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
                <DropdownItem><NavLink
                  href="/Learn-By-Song/Eloping_to_the_moon/"
                  className="text-dark"
                >
                  私奔到月球 Eloping to the Moon
                </NavLink></DropdownItem>
                  <DropdownItem><NavLink
                  href="/Learn-By-Song/I_want_your_love/"
                  className="text-dark"
                >
                  我要你的愛 I want your love
                </NavLink></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  HSK Levels
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem><NavLink href="/Learn-By-Song/HSK_1/"className="text-dark">
                    HSK 2.0 Level 1
                  </NavLink></DropdownItem>
                  <DropdownItem><NavLink href="/Learn-By-Song/HSK_2/"className="text-dark">
                    HSK 2.0 Level 2
                  </NavLink></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/Learn-By-Song/HSK_3_Level_1/" className="text-dark">
                    HSK 3.0 Level 1
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/Learn-By-Song/HSK_3_Level_2/" className="text-dark">
                      HSK 3.0 Level 2
                    </NavLink>
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
