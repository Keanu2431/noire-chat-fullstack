import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import "./Navigation.css";
function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <LinkContainer style={{ display: "flex" }} to="/">
          <Navbar.Brand>
            <img src={logo} alt="" style={{ width: 50, height: 50 }} />
            <h1>
              NoireLink <span className="span">connect with us</span>
            </h1>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    <img
                      src={user.picture}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt=""
                    />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Button
                    variant="danger"
                    style={{ backgroundColor: "#6757fd", border: "none" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
