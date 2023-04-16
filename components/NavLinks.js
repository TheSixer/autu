import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const route = useRouter();

  return (
    <ul className="main-nav__navigation-box">
      <li className={route.pathname === '/' ? 'active' : ''}>
        <Link href="/">
          <a>首页</a>
        </Link>
      </li>
      <li className={route.pathname === '/market' ? 'active' : ''}>
        <Link href="/market">
          <a>市场</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>交易工具</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>直播/推广</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>资讯中心</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>关于AuTu</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/blog">
          <>
            <a>中文</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          {/* <li>
            <Link href="/blog">
              <a>English</a>
            </Link>
          </li> */}
          <li>
            <Link href="/">
              <a>中文</a>
            </Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link href="/blog">
          <>
            <a>News</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
