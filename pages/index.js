import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountUp from "react-countup";
import Rowimg from "../Component/Rowimgs";
import Card from "../Component/Cards";
export default function Home() {
  return (
    <>
      <Head>
        <title>CAPERBERRY</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <img className={styles.plants} src="/images/plants.jpg"></img>
      {/* <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100  img-fluid"
              src="/images/plants.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/" alt="Third slide" />
          </div>
        </div>
      </div> */}
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="/images/plants.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}

      <div className="row">
        <h2 className={styles.why}>WHY CAPERBERRY?</h2>
      </div>
      <div className="row">
        <div className="col sm">
          <i className={styles.iconBig} className="fab fa-envira"></i>
          <h3>
            <CountUp end={100}></CountUp>
          </h3>
          <h3> EACH PIECE IS UNIQUE </h3>
          <p> Discover one of a kind, limited edition pieces</p>
        </div>
        <div className="col sm">
          <i className={styles.iconBig} className="fas fa-hands"></i>
          <h3>
            <CountUp end={100}></CountUp>
          </h3>
          <h3> HANDCRAFTED</h3>

          <p> Each Piece is Made With a lot of love and care</p>
        </div>
        <div className="col sm">
          <i className={styles.iconBig} className="fas fa-microphone"></i>
          <h3>
            <CountUp end={100}></CountUp>
          </h3>
          <h3>VOCAL FOR LOCAL</h3>
          <p>Support homegrown brands that follow ethical practices</p>
        </div>
      </div>
      {/* <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <i className={styles.iconBig} className="fab fa-envira"></i>
            One of three columns
          </div>
          <div className="col">
            <i className={styles.iconBig} className="fab fa-envira"></i>
            One of three columns
          </div>
          <div className="col">
            <i className={styles.iconBig} className="fab fa-envira"></i>
            One of three columns
          </div>
        </div>
      </div> */}
      {/* <div className={styles.fixHt}>hey</div> */}

      <Card></Card>

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
