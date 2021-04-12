import "@fortawesome/fontawesome-free/css/all.css";
import fstyles from "../styles/Footer.module.css";
import Link from "next/link";
import Head from "next/head";
export default function Footer() {
  return (
    <>
      <Head></Head>
      <footer className={fstyles.footer}>
        <div className={fstyles.innerFooter}>
          <div className={fstyles.socialLinks}>
            <ul>
              <li className={fstyles.socialItems}>
                <a href=" ">
                  <i className="fab fa-facebook"></i>
                  Facebook
                </a>
              </li>

              <li className={fstyles.socialItems}>
                <a href=" ">
                  <i className="fab fa-instagram"></i>
                  Instagram
                </a>
              </li>

              <li className={fstyles.socialItems}>
                <a href=" ">
                  <i className="fab fa-youtube"></i>
                  YouTube
                </a>
              </li>

              <li className={fstyles.socialItems}>
                <a href=" ">
                  <i className="fas fa-blog"></i>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={fstyles.outerFooter}>
          Copyright &copy; CAPERBERRY .All Rights Reserved
        </div>
      </footer>
      {/* <li className={fstyles.socialItems}>
                <Link href="/">blog</Link>
                <i className="fas fa-blog"></i>
              </li> */}
      {/* <li className={fstyles.socialItems}>
                <Link href="/">ig</Link>
                <i className="fab fa-instagram"></i>
              </li> */}
      {/* <li className={fstyles.socialItems}>
                <Link href="/">Yt</Link>
                <i className="fab fa-youtube"></i>
              </li> */}
    </>
  );
}
