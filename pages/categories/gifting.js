import Cards from "../../Component/Cards";
import gStyles from "../../styles/Giftings.module.css";
export default function gifting() {
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
    "/images/pic2.jpg",
    "this is 1st plant"
  );
  var product2 = new productso(
    2,
    "planter2",
    "/images/pic2.jpg",
    "this is 2nd plant"
  );
  var product3 = new productso(
    3,
    "planter3",
    "/images/pic2.jpg",
    "this is 3rd plant"
  );
  var product4 = new productso(
    4,
    "planter4",
    "/images/pic2.jpg",
    "this is 4th plant"
  );
  var product5 = new productso(
    5,
    "planter5",
    "/images/pic2.jpg",
    "this is 5th plant"
  );
  var product6 = new productso(
    6,
    "planter6",
    "/images/pic2.jpg",
    "this is 6th plant"
  );
  var product7 = new productso(
    7,
    "planter7",
    "/images/pic2.jpg",
    "this is 7th plant"
  );
  var product8 = new productso(
    8,
    "planter8",
    "/images/pic2.jpg",
    "this is 8th plant"
  );
  var product9 = new productso(
    9,
    "planter9",
    "/images/pic2.jpg",
    "this is 9th plant"
  );
  var product10 = new productso(
    10,
    "planter10",
    "/images/pic2.jpg",
    "this is 10th plant"
  );
  var product11 = new productso(
    11,
    "planter11",
    "/images/pic2.jpg",
    "this is 11th plant"
  );
  var product12 = new productso(
    12,
    "planter12",
    "/images/pic2.jpg",
    "this is 12th plant"
  );
  var product13 = new productso(
    13,
    "planter13",
    "/images/pic2.jpg",
    "this is 13th plant"
  );
  var product14 = new productso(
    14,
    "planter14",
    "/images/pic2.jpg",
    "this is 14th plant"
  );
  var product15 = new productso(
    15,
    "planter15",
    "/images/pic2.jpg",
    "this is 15th plant"
  );
  var product16 = new productso(
    16,
    "planter16",
    "/images/pic2.jpg",
    "this is 16th plant"
  );
  var product17 = new productso(
    17,
    "planter17",
    "/images/pic2.jpg",
    "this is 17th plant"
  );
  var product18 = new productso(
    18,
    "planter18",
    "/images/pic2.jpg",
    "this is 18th plant"
  );

  let products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
  ];
  let products1 = [product1, product2, product3, product4];
  // const list = products.map((p) => {
  //   console.log(p);
  //   <Card product={p}></Card>;
  // });
  // console.log(list);
  return (
    <>
      <div className={gStyles.rootCard}>
        {products.map((p) => {
          return <Cards product={p}></Cards>;
        })}
      </div>
    </>
  );
}
