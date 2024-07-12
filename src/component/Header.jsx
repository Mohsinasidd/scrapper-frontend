import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
  const [openNavText, setOpenNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Web Scrapper</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='d-flex'>
                <Link to={"/"}>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
                </Link>
                <Link to={"/dashboard"}>
              <MDBNavbarLink active aria-current='page' href='#'>
                Dashboard
              </MDBNavbarLink>
                </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}