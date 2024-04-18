import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "./migration";
import { mainBody, repos, about, skills,getInTouch } from "../editable-stuff/config.js";
const NewNavbar = () => {
    return (
        <Navbar className={`px-3 fixed-top "navbar-white"`}
  expand="lg">
            <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}> {`<${mainBody.firstName} />`}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                {repos.show && (
                    <NavLink
                    href={process.env.PUBLIC_URL + "/#projects"}
                    >
                    Projects
                    </NavLink>
                    )}
                <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
                    <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
            {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
          {getInTouch.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#getInTouch"}
            >
              Get In Touch
            </NavLink>
          )}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NewNavbar;