import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountUp from "react-countup";
import Rowimg from "../Component/Rowimgs";
import PictureCorousel from "../Component/PictureCorousel";
import CardsCorousel from "../Component/CardsCorousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>CAPERBERRY</title>
      </Head>

      <div className={styles.discount}>
        <p>
          {" "}
          <style jsx>{`
            margin-left: 20px;
          `}</style>
          Avail Free Delivery On Purchase of 999/- and Above
        </p>
      </div>
      <PictureCorousel></PictureCorousel>
      <div className={styles.why}>
        {" "}
        <Container>
          <Row>
            <Col>
              <h2>WHY CAPERBERRY?</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div className={styles.iconBig}>
                <i className="fab fa-envira "></i>
              </div>
              <h3>
                <CountUp end={100}></CountUp>
              </h3>
              <h3> EACH PIECE IS UNIQUE </h3>
              <p> Discover one of a kind, limited edition pieces</p>
            </Col>
            <Col>
              <div className={styles.iconBig}>
                <i className="fas fa-hands"></i>
              </div>
              <h3>
                <CountUp end={100}></CountUp>
              </h3>
              <h3> HANDCRAFTED</h3>

              <p> Each Piece is Made With a lot of love and care</p>
            </Col>
            <Col>
              <div className={styles.iconBig}>
                <i className="fas fa-microphone "></i>
              </div>
              <h3>
                <CountUp end={100}></CountUp>
              </h3>
              <h3>VOCAL FOR LOCAL</h3>
              <p>Support homegrown brands that follow ethical practices</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.category}>
        <h2>
          <Link href="/categories/planters">Planters</Link>
        </h2>
        <div>
          <CardsCorousel></CardsCorousel>
        </div>
      </div>
      <div className={styles.category}>
        <h2>
          {" "}
          <Link href="/categories/containers">Containers</Link>
        </h2>
        <div>
          <CardsCorousel></CardsCorousel>
        </div>
      </div>
      <div className={styles.category}>
        <h2>
          <Link href="/categories/gifting">Giftings</Link>
        </h2>
        <div>
          <CardsCorousel></CardsCorousel>
        </div>
      </div>
      <Rowimg></Rowimg>
      {/* <Image
        src="/images/planters.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      {/* <Layout></Layout> */}
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}
      {/* <footer className={styles.footer}></footer> */}
    </>
  );
}
