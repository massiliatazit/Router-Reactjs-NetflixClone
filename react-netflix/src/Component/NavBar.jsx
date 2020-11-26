import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import netflixlogo from "../images/netflixlogo.png";
import searchIcon from "../images/searchIcon.png";
import giftIcon from "../images/giftIcon.png";
import bell from "../images/bell.png";
import user from "../images/user.png";
import SearchBox from "../Components/SearchBox";
import { Link, withRouter } from "react-router-dom";
class NavBar extends React.Component {
  state = {
    isSearch: false,
    searchInput: "",
  };

  toggleSearch = () => {
    this.state.isSearch
      ? this.setState({ isSearch: false })
      : this.setState({ isSearch: true });
  };

  setInputValue = (e) => {
    this.setState({ searchInput: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Navbar
          className="d-flex align-items-center"
          style={{
            position: "fixed",
            zIndex: "1",
            width: "100%",
            backgroundColor: "#020102",
          }}
        >
          <Navbar.Brand href="#home">
            <img
              src={netflixlogo}
              width="auto"
              height="33px"
              className="mb-0 ml-4"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="mr-auto mb-0">
            <Link to="/">
              <div style={{ color: "white" }} className="nav-link">
                Home
              </div>
            </Link>
            <Link to="/tvshows">
              <div
                style={{ color: "white" }}
                className={
                  this.props.location.pathname === "/tvshows"
                    ? "nav-link selected"
                    : "nav-link"
                }
              >
                Tv Shows
              </div>
            </Link>
            <Link to="/registration">
              <div
                style={{ color: "white" }}
                className={
                  this.props.location.pathname === "/registration"
                    ? "nav-link selected"
                    : "nav-link"
                }
              >
                Registration
              </div>
            </Link>
            <Nav.Link style={{ color: "white" }}>Recently Added</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Recently Added</Nav.Link>
          </Nav>
          <Form
            inline
            onMouseLeave={
              this.state.searchInput.length === 0 && this.toggleSearch
            }
          >
            <img
              style={{
                height: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
              src={searchIcon}
              alt="search-icon"
              onMouseEnter={!this.state.isSearchOpen && this.toggleSearch}
            ></img>
            <FormControl
              id="search-box"
              className={this.state.isSearch ? "d-block" : "d-none"}
              style={{ backgroundColor: "transparent", borderRadius: "0" }}
              type="text"
              placeholder="Titles, people, genres"
              onChange={this.setInputValue}
              value={this.state.searchInput}
            />
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              KIDS
            </Nav.Link>
            <img
              style={{ height: "20px", marginRight: "20px" }}
              src={giftIcon}
              alt="gift-icon"
            ></img>
          </Form>
          <img
            style={{
              height: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            src={bell}
            alt="notifications-icon"
          ></img>{" "}
          <img
            style={{
              height: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            src={user}
            alt="user-icon"
          ></img>
        </Navbar>
        <SearchBox
          isSearchOpen={this.state.isSearch}
          searchInput={this.state.searchInput}
        />
      </>
    );
  }
}

export default withRouter(NavBar);
