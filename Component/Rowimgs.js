import Link from "next/link";
import Image from "next/image";
import imgStyles from "../styles/Rowimgs.module.css";
// import img from "../public/images/plants.jpg";

//  can do 1 thoing that image home se mangwa ke loop chala ke bhejdo
export default function Rowimgs() {
  return (
    <>
      <div className={imgStyles.insta}>
        <h3>
          <a href="/"> INSTAGRAM @Caperberry</a>
        </h3>
        <section className={imgStyles.sectionMeals}>
          <ul
            className={imgStyles.mealsshowcase}
            className={imgStyles.clearfix}
          >
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic1.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic2.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic3.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic4.jpg"
                />
              </figure>
            </li>
          </ul>
          <ul
            className={imgStyles.mealsshowcase}
            className={imgStyles.clearfix}
          >
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic5.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic6.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic7.jpg"
                />
              </figure>
            </li>
            <li className={imgStyles.mealsshowcaseLi}>
              <figure className={imgStyles.mealphoto}>
                <img
                  className={imgStyles.mealphotoImg}
                  src="/images/pic8.jpg"
                />
              </figure>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
