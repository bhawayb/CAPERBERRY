import Head from "next/head";
import cardStyles from "../styles/Cards.module.css";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const res = ({ product }) => {
  return (
    <>
      <Head></Head>

      {/* <Link href="/categories/planters"> Planters</Link>
      <div className={cardStyles.stack}>{list}</div>

      <Link href="/categories/containers"> Containers</Link>
      <div className={cardStyles.stack}>{list}</div>

      <Link href="/categories/gifting"> Giftings</Link>
      <div className={cardStyles.stack}>{list}</div> */}
      {/* <div className="card" key={product.id}>
        <img src={product.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      <Card key={product.id}>
        <style jsx>{' width: "18rem" '}</style>
        <Card.Img variant="top" src={product.imageLink} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.desc}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default res;
