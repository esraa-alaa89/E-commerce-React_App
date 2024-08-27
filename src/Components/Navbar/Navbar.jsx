/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';
import NavbarStyle from './NavbarStyle.module.css';
import { WishListContext } from '../../Context/WishListContextProvider';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavTailwind() {
    const {userToken, setUserToken}= useContext(UserContext);
    const {counter}= useContext(CartContext);
    const {wishListCounter}= useContext(WishListContext);
    console.log('userToken from navbar');
    
    const logoutNavigate= useNavigate();
    function logout() {
        localStorage.removeItem('userToken');
        setUserToken(null);
        logoutNavigate('/login');
    }

    return <>
        {userToken !== null ? <nav className={NavbarStyle.firstNav}>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link className='cursor-pointer'>Shop Now</Link>
            </nav>
            :''
        }
        
        <Navbar expand="lg" className="bg-body-tertiary text-center">
            <Container>
                <Navbar.Brand href='' className='text-black-900 text-2xl'>Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {userToken !== null ? <>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='text-black-600 text-lg px-lg-5' href=''>Home</Nav.Link>
                            <Nav.Link className='text-black-600 text-lg px-lg-5' href='about'>About</Nav.Link>
                            <Nav.Link className='text-black-600 text-lg px-lg-5' href='contact'>Contact</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Nav.Link>
                                <input className="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search"/>
                            </Nav.Link>
                            <Nav.Link href='wishlist'>
                                <i className="fa-regular fa-heart"></i>
                                <sup className='text-danger fs-6'>{wishListCounter}</sup>
                            </Nav.Link>
                            <Nav.Link href='cart'>
                                <i className="fa-solid fa-bag-shopping"></i>
                                <sup className='text-danger fs-6'>{counter}</sup>
                            </Nav.Link>

                            <NavDropdown className='text-black-600 text-lg' href='profile' title="Account Info" id="basic-nav-dropdown">
                                <NavDropdown.Item className='text-black-600 text-lg' href='profile'>My Account</NavDropdown.Item>
                                <NavDropdown.Item className='text-black-600 text-lg' href='signup'>SignUp</NavDropdown.Item>
                                <NavDropdown.Item className='text-black-600 text-lg' href='login'>Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='text-black-600 text-lg'>
                                    <button onClick={()=>logout()}>Logout</button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </> :   <Nav className="ms-auto">
                            <Nav.Link href='signup'>SignUp</Nav.Link>
                            <Nav.Link href='login'>Login</Nav.Link>
                        </Nav>
                }
            </Container>
        </Navbar>
    </>
}
