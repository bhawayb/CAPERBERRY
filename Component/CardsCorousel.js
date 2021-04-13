import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CardsCorousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
    "/images/pic1.jpg",
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
    "/images/pic3.jpg",
    "this is 3rd plant"
  );
  var product4 = new productso(
    4,
    "planter4",
    "/images/pic4.jpg",
    "this is 4th plant"
  );
  let products = [product1, product2, product3, product4];

  //   const list = products.map((product) => {
  //     return (
  //       <div href="#" className="card" key={product.id}>
  //         <img src={product.imageLink} className="card-img-top" alt="..." />
  //         <div className="card-body">
  //           <h5 className="card-title">{product.name}</h5>
  //           <p className="card-text">{product.desc}</p>
  //           <a href="#" className="btn btn-primary">
  //             Go somewhere
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   });
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          {" "}
          <div href="#" className="card" key={product1.id}>
            <img src={product1.imageLink} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product1.name}</h5>
              <p className="card-text">{product1.desc}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div href="#" className="card" key={product2.id}>
            <img src={product2.imageLink} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product2.name}</h5>
              <p className="card-text">{product2.desc}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div href="#" className="card" key={product3.id}>
            <img src={product3.imageLink} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product3.name}</h5>
              <p className="card-text">{product3.desc}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div href="#" className="card" key={product4.id}>
            <img src={product4.imageLink} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product4.name}</h5>
              <p className="card-text">{product4.desc}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
