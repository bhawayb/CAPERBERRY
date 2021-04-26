import Head from "next/head";
import cardStyles from "../styles/Cards.module.css";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const res = ({ product }) => {
  return (
    <>
      <Head></Head>
      <Card className={cardStyles.card} key={product.id}>
        {/* <style jsx>{' width: "20rem" '}</style> */}
        <Card.Img variant="top" src={product.imageLink} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.desc}</Card.Text>
          <Button variant="light">
            <Link href={`/products/[id]`} as={`/products/${product.id}`}>
              View Product
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default res;
