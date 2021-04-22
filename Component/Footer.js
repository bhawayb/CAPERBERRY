import "@fortawesome/fontawesome-free/css/all.css";
import fstyles from "../styles/Footer.module.css";
import Link from "next/link";
import Head from "next/head";
export default function Footer() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={fstyles.footerHead}>
        <div className={fstyles.innerFooter}>
          <h2>You have Made a Conscious Choice</h2>
          <h2>Connect With Us</h2>

          <div>
            {" "}
            <h4>@ Caperberry</h4>
          </div>
          <div className={fstyles.socialHandle}>
            <span>
              {" "}
              <a href="/blog" className={fstyles.icon}>
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a href="/blog" className={fstyles.icon}>
                {" "}
                <i className="fab fa-facebook-square"></i>
              </a>
            </span>
          </div>
          <div className={fstyles.written}>
            <div>
              For Collaborations <a>x@gmail.com</a>
            </div>
            <div>
              For Bulk Orders <a>y@gmail.com</a>
            </div>
            <div>
              Wanna Work With Us ? <a>z@gmail.com</a>
            </div>
            <div>Any Queries Contact - 66666666</div>
          </div>
        </div>
        <div className={fstyles.outerFooter}>
          CopyRights are Reserved @ Caperberry
        </div>
      </div>
    </>
  );
}
