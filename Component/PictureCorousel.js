import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PictureCorousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      //   slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 1,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
    },
  };

  let imgl = [
    "images/pic4.jpg",
    "images/pic2.jpg",
    "images/pic4.jpg",
    "/images/pic2.jpg",
  ];
  return (
    <>
      <div>
        <style jsx>{`
          height: 600px;
        `}</style>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          focusOnSelect={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img className="plants" src={imgl[0]}></img>
          </div>
          <div>
            <img className="plants" src={imgl[1]}></img>
          </div>
          <div>
            <img className="plants" src={imgl[2]}></img>
          </div>
          <div>
            <img className="plants" src={imgl[3]}></img>
          </div>
        </Carousel>
      </div>
    </>
  );
}
