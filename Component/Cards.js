import Head from "next/head";
import cardStyles from "../styles/Cards.module.css";
const res = () => {
  // array bnalenge objects ka// with product object consists of
  //object-->
  function productso(id, name, imageLink, desc) {
    this.id = id;
    this.name = name;
    this.imageLink = imageLink;
    this.desc = desc;
  }
  //1. object id
  //2. product image
  //3. product name
  //4. product description
  var product1 = new productso(
    1,
    "planter1",
    "../public/images/pic1.jpg",
    "this is 1st plant"
  );
  var product2 = new productso(
    2,
    "planter2",
    "../public/images/pic1.jpg",
    "this is 2nd plant"
  );
  var product3 = new productso(
    3,
    "planter3",
    "../public/images/pic1.jpg",
    "this is 3rd plant"
  );
  var product4 = new productso(
    4,
    "planter4",
    "../public/images/pic1.jpg",
    "this is 4th plant"
  );
  let products = [product1, product2, product3, product4];
  console.log(products);
  const list = products.map((product) => {
    console.log(String(product.imageLink));
    return (
      <div className="card" key={product.id}>
        <img
          src={String(product.imageLink)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
          integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
          integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossorigin="anonymous"
        ></script>
      </Head>
      {/* saari list display ho jygi  */}
      {/* just have to manage the space */}
      {/* {list} */}
      <div>{list}</div>
    </>
  );
};

export default res;
