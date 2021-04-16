import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap";
// useEffect(() => {});
// const Nav = () => {
//   return (
//     <>
//       <Head></Head>
//       <nav className={navStyles.nav}>
//         <li>CAPERBERRY</li>
//         <li>
//           <span>
//             <Link href="/">Home</Link>
//           </span>
//         </li>
//         <li>
//           <div className="dropdown">
//             <a
//               className="dropdown-toggle"
//               href="#"
//               role="button"
//               id="dropdownMenuLink"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Shop
//             </a>

//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//               <li>
//                 <a className="dropdown-item" href="/categories/planters">
//                   Planters
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="/categories/containers">
//                   Containers
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="/categories/gifting">
//                   Gifting
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li>
//           <span>
//             <Link href="/blog">Blog</Link>
//           </span>
//         </li>

//         <li>
//           <span>
//             <Link href="/contact">Contact</Link>
//           </span>
//         </li>
//         <li>
//           <span>
//             <Link href="/checkout">bagIcon</Link>
//           </span>
//         </li>
//       </nav>
//     </>
//   );
// };
// const Nav = () => {
//   return (
//     <>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

const Nav = () => {
  return (
    <>
      <div className={navStyles.header}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            ></button>
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
              {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
