import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/ApnaBazaarLogo.png";
import { FaUser } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#BCBCBC"
      burgerColorHover="#FF87B7"
      logo={logo}
      logoWidth="20vmax"
      navColor1="rgb(0, 22, 0, 0.4)"
      logoHoverSize="10px"
      logoHoverColor="#BCBCBC"
      link1Text="Home"
      link2Text="Product"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/product"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="#BCBCBC"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#FF87B7"
      link2ColorHover="#FF87B7"
      link3ColorHover="#FF87B7"
      link4ColorHover="#FF87B7"
      link2Margin="1vmax"
      link3Margin="0"
      link4Margin="1vmax"
      profileIconColor="rgba(35, 35, 35, 0.8)"
      searchIconColor="rgba(35, 35, 35, 0.8)"
      cartIconColor="rgba(35, 35, 35, 0.8)"
      profileIconColorHover="#FF87B7"
      searchIconColorHover="#FF87B7"
      cartIconColorHover="#FF87B7"
      ProfileIconElement={FaUser}
      SearchIconElement={ImSearch}
      CartIconElement={FiShoppingBag}
      cartIconSize={36}
      searchIconSize={36}
      profileIconSize={36}
      cartIconMargin={10}
      searchIconMargin={10}
      profileIconMargin={10}
      //cartIconMargin="1vmax"
      profileIcon={true}
      cartIcon={true}
      searchIcon={true}
    />
  );
};

export default Header;
