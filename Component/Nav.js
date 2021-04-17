import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  const [scrollDir, setScrollDir] = useState(
    "navbar navbar-expand-lg navbar-light bg-light"
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY > lastScrollY
          ? "navbar navbar-expand-lg navbar-light bg-light"
          : " anim navbar fixed-top navbar-expand-lg navbar-light bg-light"
      );

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <div className={navStyles.header}>
        <nav class={scrollDir}>
          <div class="container-fluid">
            <a class="navbar-brand" href="/blog">
              CAPERBERRY
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/categories/planters">
                        Planters
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/categories/containers">
                        Containers
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="/categories/gifting">
                        Giftings
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/blog">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <a class="nav-link active" aria-current="page" href="/checkout">
                  BagIcon
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
