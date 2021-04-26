import pStyles from "../styles/Product.module.css";
import Image from "next/Image";
export default function Product({ data }) {
  return (
    <>
      <div className={pStyles.page}>
        <div>
          {/* <img src={data.img} class="rounded float-start" alt="PrductImage" /> */}
          <Image height={600} width={700} src={data.img}></Image>
        </div>
        <div className={pStyles.details}>
          <h2>{data.name}</h2>
          <h4>Rs 500</h4>
          <h4> Material - Wood, Glass</h4>
          <p>Size - 18 X 14</p>{" "}
          {/* need size details , material details and the price details also*/}
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">
              +
            </button>

            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Example text with two button addons"
            />
            <button type="button" class="btn btn-primary">
              -
            </button>
          </div>
          {/* <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button">
              +
            </button>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Example text with two button addons"
            />
            <button class="btn btn-outline-secondary" type="button">
              -
            </button>
          </div> */}
          <div>
            <button type="button" class="btn btn-primary">
              Add to Cart
            </button>
          </div>
          <p> Description-{data.desc}</p>
          <p>Expected Delivery in 5-8 Days</p>
        </div>
      </div>
      {/* <div className={pStyles.imgSection}>
        <img src={data.img}></img>
      </div> */}
    </>
  );
}
