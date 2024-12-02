import { Outlet, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import { useLocation } from "react-router-dom";



function Layout2() {


  const [openNavColor, setOpenNavColor] = useState(false);
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const [openNavColorThird, setOpenNavColorThird] = useState(false);


    const [title, setTitle] = useState("Home");
  
   

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

  return (
    <>

<MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Interface App </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>


            <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/'  className={splitLocation[1] === "" ? "active" : ""}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Features'  className={splitLocation[1] === "Features" ? "active" : ""}>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/About'   className={splitLocation[1] === "About" ? "active" : ""}>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Weather' className={splitLocation[1] === "Weather" ? "active" : ""} >Weather</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/Contact'   className={splitLocation[1] === "Contact" ? "active" : ""}>Contact</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>



      <Outlet />

  
    </>
  );
}

export default Layout2;