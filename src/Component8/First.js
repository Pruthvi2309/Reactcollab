import React, { useState } from 'react';
import styled from 'styled-components';

function First() {
    const [showCausalWear, setShowCausalWear] = useState(false);
    const [showPartyWear, setShowPartyWear] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);

    const handleCausalWearClick = () => {
      setShowCausalWear(!showCausalWear);
      setShowPartyWear(false);
      setProductDropdownOpen(false);
  };
  
  const handlePartyWearClick = () => {
      setShowPartyWear(!showPartyWear);
      setShowCausalWear(false);
      setProductDropdownOpen(false);
  };

    return (
        <Wrapper>
            <nav className={`head ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className='logo'>
                    <img src="logo192.png" className="img1" alt="Logo"/>
                </div>
                <div className={`link1 ${productDropdownOpen ? 'push-down' : ''}`}>
                    <ul className={`link ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
                        <li><a href=''>Home</a></li>
                        <li className="product-tab">
                            <a
                                href=''
                                className={showCausalWear || showPartyWear ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowCausalWear(false);
                                    setShowPartyWear(false);
                                    setProductDropdownOpen(!productDropdownOpen); // Toggle the Product dropdown
                                }}
                            >
                                Product
                            </a>
                            <div
                                className={`dropdown-content ${showCausalWear ? 'show' : ''}`}
                            >
                                <ul>
                                    <li>
                                        <a
                                            href='#'
                                            className={showCausalWear ? 'active' : ''}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleCausalWearClick();
                                            }}
                                        >
                                            Causal Wear
                                        </a>
                                        {showCausalWear && (
                                            <div className="nested-dropdown">
                                                <ul>
                                                    <li><a href="#">Top Wear</a></li>
                                                    <li><a href="#">Bottom Wear</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className={showPartyWear ? 'active' : ''}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePartyWearClick();
                                            }}
                                        >
                                            Party Wear
                                        </a>
                                        {showPartyWear && (
                                            <div className="nested-dropdown">
                                                <ul>
                                                    <li><a href="#">Top Wear</a></li>
                                                    <li><a href="#">Bottom Wear</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href=''>About Us</a></li>
                        <li><a href=''>Contact Us</a></li>
                    </ul>
                </div>
                <div className='desktop-icons'>
                    <i className='bx bx-heart heart1'></i>
                    <i className='bx bx-cart cart1'></i>
                    <button type="submit">Login</button>
                </div>
                <div className='mobile-buttons'>
                    <i
                        className={`bx bx-menu-alt-right ${mobileMenuOpen ? 'hide' : ''}`}
                        onClick={() => setMobileMenuOpen(true)}
                    ></i>
                    <i
                        className={`bx bx-x ${mobileMenuOpen ? '' : 'hide'}`}
                        onClick={() => setMobileMenuOpen(false)}
                    ></i>
                    {/* Mobile view for cart and wishlist */}
                    <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
                        <i
                            className='bx bx-heart'
                            onClick={() => {
                                setMobileMenuOpen(false);
                                // Handle the "Your wishlist" action here
                            }}
                        >Your wishlist</i>
                        <i
                            className='bx bx-cart'
                            onClick={() => {
                                setMobileMenuOpen(false);
                                // Handle the "Your cart" action here
                            }}
                        >Your cart</i>
                    </div>
                </div>
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
  .head {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    place-items: baseline;
    padding: 10px 20px;
    color: white;
  }
  
  .logo img {
    width: 3rem;
    height: 2rem;
    cursor: pointer;
  }
  
  .link1 {
    text-align: right;
  }
  
  .link {
    list-style: none;
    display: flex;
    gap: 40px;
    position: relative;
  }
  
  .link li a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    transition: 0.3s;
  }
  
  .link li a.active,
  .link li a:hover {
    color: #f1c40f;
  }
  
  .dropdown-content {
    position: absolute;
    display: none;
    background-color: black;
    min-width: 150px;
    z-index: 1;
    top: 100%;
  }
  
  .link li:hover .dropdown-content {
    display: block;
  }
  
  .dropdown-content ul {
    list-style: none;
    padding: 0;
  }
  
  .dropdown-content li a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px;
  }
  
  .dropdown-content li a:hover {
    background-color: #f1c40f;
    color: black;
  }

  .nested-dropdown {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 150px;
    background-color: #f1c40f;
  }

  .link li:hover .nested-dropdown {
    display: block;
  }

  i {
    margin-left: 2rem;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
  }
  
  i:hover {
    color: #f1c40f;
  }
  
  button {
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1.2rem;
    background: black;
    color: white;
    padding: 8px 20px;
    margin: auto;
    margin-left: 2rem;
    cursor: pointer;
    text-transform: uppercase;
  }
  
  button:hover {
    border: 1px solid #f1c40f;
    border-radius: 5px;
    background: black;
    color: #f1c40f;
  }

// change for mobile view only
  .desktop-icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mobile-buttons {
    display: none;
    align-items: center;
    gap: 10px;
  }

  .bx-menu-alt-right,
  .bx-x {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hide {
    display: none;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    background-color: black;
    position: absolute;
    top: 0;
    margin-top: 59px;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }


// mobile view
@media screen and (max-width: 768px) {
    /* ... styles for mobile view ... */

    .mobile-buttons {
      display: flex;
    }

    .link {
      display: none;
    }

    .link.mobile-menu {
      display: flex;
      flex-direction: column;
      background-color: black;
      position: absolute;
      top: 0;
      margin-top: 59px;
      left: 0;
      right: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    .head.mobile-menu-open {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .dropdown-content.show,
    .nested-dropdown.show {
      display: block;
    }

    .link.mobile-menu li {
      margin-bottom: 20px;
      position: relative; /* Add this line to make the parent <li> element a positioned container for absolute positioning */
    }

    .bx-x {
      font-size: 2rem;
    }
    .dropdown-content.show,
    .nested-dropdown.show {
      display: block;
      position: absolute; /* Change from "position: relative" to "position: absolute" */
      top: 0;
      left: 100%;
      min-width: 150px;
      background-color: #f1c40f;
      transform: translateX(-100%); /* Add this line to shift the menu to the left by its own width */
    }

    .link1.push-down {
      margin-top: 150px; /* Adjust the value based on your design */
    }

    /* Update the positioning of the other tabs when the Product dropdown is open */
    .link1.push-down .link.mobile-menu {
        display: flex;
        flex-direction: column;
        background-color: black;
        position: absolute;
        top: 0;
        margin-top: 59px;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    .desktop-icons heart1{
      content: "your wishlist"
    }

    .desktop-icons cart1{
      content: "your cart"
    }
  }
`;

export default First;
