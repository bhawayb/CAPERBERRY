import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Head from "next/head";
import { useEffect } from "react";

// useEffect(() => {});
const Nav = () => {
  return (
    <>
      <Head></Head>
      <nav className={navStyles.nav}>
        <li>CAPERBERRY</li>
        <li>
          <span>
            <Link href="/">Home</Link>
          </span>
        </li>
        <li>
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/categories/planters">
                  Planters
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/categories/containers">
                  Containers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/categories/gifting">
                  Gifting
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <span>
            <Link href="/blog">Blog</Link>
          </span>
        </li>

        <li>
          <span>
            <Link href="/contact">Contact</Link>
          </span>
        </li>
        <li>
          <span>
            <Link href="/checkout">bagIcon</Link>
          </span>
        </li>
      </nav>
    </>
  );
};

export default Nav;
