import React from "react";
import pink_div from "../assets/image/png/pink_div.png";
import table from "../assets/image/png/table_explore.png";
import flower1 from "../assets/image/png/table_flower1.png";
import small_flower from "../assets/image/png/small_logo.png";
import kitchan_thinks from "../assets/image/png/kitchan_thinks.png";
import kitchan_flower from "../assets/image/png/kitchan_flower.png";
import spon from "../assets/image/png/woodden_spon.png";
import desing from "../assets/image/png/design.png";
import measuring from "../assets/image/png/measuring.png";
import budgeting from "../assets/image/png/budgeting.png";
import production from "../assets/image/png/production.png";
import one_img from "../assets/image/png/one_img.png";
import second_img from "../assets/image/png/two_img.png";
import third_img from "../assets/image/png/three_img.png";
import forth_img from "../assets/image/png/four_img.png";
import desk from "../assets/image/png/desk.png";
import chair from "../assets/image/png/chair.png";
import kitchenware from "../assets/image/png/kitchenware.png";
import shelf from "../assets/image/png/shelf.png";
import radio from "../assets/image/png/radio.png";
import pink_box from "../assets/image/png/pink_box.png";
import orange_box from "../assets/image/png/orange_box.png";
import blue_box from "../assets/image/png/blue_box.png";
import room_img from "../assets/image/png/room_img.png";
import kitchan_img from "../assets/image/png/kitchan_img.png";
import star from "../assets/image/png/star_img.png";
import sandra_dewi from "../assets/image/png/sandra_dewi.png";
import previous from "../assets/image/png/previous.png";
import next from "../assets/image/png/next.png";
import slider from "../assets/image/png/slider_.png"

const Section = () => {
  return (
    <>
      {/* -------------- woodden furniture --------------- */}
      <section className="postion-relative">
        <div className="pink_div">
          <img src={pink_div} alt="pink_div" />
        </div>
        <div className="my_container heroMIn d-flex mt-lg-0 mt-5">
          <div className="flex-grow-1 row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <p className="fs_36 fw-medium text_gray text-lg-start text-center">
                Are you looking for
                <span className="fw-bold"> woodden furniture </span>
                for your place?
              </p>
              <p className="fs_72 fw-bold mt-ms-3 mt-3 pt-sm-0 pt-1 fs_lblack w_75 text-lg-start text-center lh_70">
                This is the Right Place
              </p>
              <div className="text-lg-start text-center">
                <button className="fs_16 fw-bold explore_furniture mt-3 ">
                  Explore Furniture
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-9 col-12 position-relative mt-lg-0 mt-4 pt-3">
              <img className="w-100" src={table} alt="table img" />
              <div>
                <img className="table_flower " src={flower1} alt="flower1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- ABOUT US --------------- */}

      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-4">
        <div className="my_container mt-lg-5 mt-sm-3 mt-0 pt-lg-5 pt-sm-4 pt-2">
          <div className="d-flex align-items-center justify-content-between gap-3 d-none d-sm-flex">
            <img src={small_flower} alt="" />
            <h4 className="fs_36 fw-bold text-dark">Who we are</h4>
            <div className="flex-grow-1 border_bottom mx-"></div>
            <h2 className="fs_72 text_lskyblue fw-bolder">ABOUT US</h2>
          </div>

          <div className="row align-items-center justify-content-md-between justify-content-center flex-md-row flex-column mt-4 pt-3">
            <div className="col-lg-5 col-md-5 col-sm-7 col-12 position-relative">
              <div>
                <img
                  className="w-100"
                  src={kitchan_thinks}
                  alt="kitchan_thinks"
                />
              </div>
              <img
                className="kitchan_flower"
                src={kitchan_flower}
                alt="kitchan_flower"
              />
            </div>

            <div className="col-lg-6 col-md-7 col-sm-12 col-12 mt-md-0 mt-sm-4 mt-5">
              <p className="fs_36 fw-bolder text_gary">
                WOODIES <span className="fw-semibold">is the</span> home of
                modern wooden furniture
              </p>
              <p className="fs_24 fw-semibold text-black mt-3 w_75">
                the answer to your need for furniture with shapes, sizes and
                colors.{" "}
              </p>
            </div>
          </div>

          <div className="row align-items-center justify-content-lg-between justify-content-center flex-lg-row flex-column-reverse   mt-lg-4 mt-5 pt-3">
            <div className="col-lg-8 col-md-10 col-sm-12 col-12 mt-lg-0 mt-sm-4 mt-5">
              <div className="">
                <p className="fs_36 fw-semibold text-black">
                  Customized furniture{" "}
                  <span className="fw-bolder">made just for you</span>
                </p>
                <p className="fs_24 mt-3 fw-semibold text-black">
                  Get it easy to adjust furniture to the shape and size of your
                  dwelling or business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 col-6">
              <div className="woodden_spon ">
                <img className="w-100" src={spon} alt="spon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- HOW IT WORKS --------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-4">
        <div className="my_container mt-lg-4 mt-3 ">
            <div className="d-flex align-items-center justify-content-md-between justify-content-center gap-lg-3 gap-2 ">
            <img className="d-md-block d-none" src={small_flower} alt="small_flower" />
            <p className="fs_36 fw-bold text-dark d-md-block d-none">How to custom</p>
            <div className="flex-grow-1 border_bottom d-md-block d-none"></div>
            <p className="fs_72 text_lskyblue fw-bolder d-block">HOW IT WORKS</p>
          </div>
          <div className="row align-items-center justify-content-lg-between justify-content-center mt-5 pt-3">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 position-relative">
              <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                <img src={desing} alt="Design" />
                <p className="fs_24 fw-bold text-black ">Choose Design</p>
                <img className="count_img" src={one_img} alt="one" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-sm-0 mt-4 position-relative">
              <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                <img src={measuring} alt="measuring" />
                <p className="fs_24 fw-bold text-black ">Area measuring</p>
                <img className="count_img" src={second_img} alt="second" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-md-0 mt-4 position-relative">
              <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                <img src={budgeting} alt="budgeting" />
                <p className="fs_24 fw-bold text-black ">Budgeting</p>
                <img className="count_img" src={third_img} alt="third" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-lg-0 mt-4 position-relative">
              <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                <img src={production} alt="production" />
                <p className="fs_24 fw-bold text-black ">Production</p>
                <img className="count_img" src={forth_img} alt="forth" />
              </div>
            </div>
          </div>

          <div className="text-center mt-lg-5 mt-ms-4 mt-3 pt-3">
            <button className="fs_16 fw-bold explore_furniture">
              Get Personalized Now
            </button>
          </div>
        </div>
      </section>

      {/* -------------- CATEGORIES --------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-4">
        <div className="my_container mt-4">
          <div className="d-flex align-items-center justify-content-md-between justify-content-center gap-lg-3 gap-2 ">
            <img
              className="d-md-block d-none"
              src={small_flower}
              alt="small_flower"
            />
            <p className="fs_36 fw-bold text-dark d-md-block d-none">
              What we have
            </p>
            <div className="flex-grow-1 border_bottom d-md-block d-none"></div>
            <p className="fs_72 text_lskyblue fw-bolder d-block">CATEGORIES</p>
          </div>

          <div className="row my-md-4 my-sm-2 pt-md-3 pt-sm-2 pt-0 justify-content-lg-start justify-content-center">
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-lg-0 mt-md-4 pt-3 mt-3">
              <div className="card">
                <img className="w-100" src={pink_box} alt="" />
                <div className="content h-100 ">
                  <p className="fs_24 fw-bolder text_gray">Desk</p>
                  <div className="w-100 text-center">
                    <img className="w-100" src={desk} alt="desk" />
                  </div>
                  <div className="text-end ">
                    <button className="show_now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-lg-0 mt-md-4 pt-3 mt-3">
              <div className="card">
                <img className="w-100" src={orange_box} alt="orange_box" />
                <div className="content h-100 ">
                  <p className="fs_24 fw-bolder text_gray">Chair</p>
                  <div className="text-center w-100 h-75">
                    <img className="w-100 h-100" src={chair} alt="Chair" />
                  </div>
                  <div className="text-end ">
                    <button className="show_now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-lg-0 mt-md-4 pt-3 mt-3">
              <div className="card">
                <img className="w-100" src={blue_box} alt="" />
                <div className="content h-100 ">
                  <p className="fs_24 fw-bolder text_gray">Kitchenware</p>
                  <div className="w-100 text-center">
                    <img className="w-100" src={kitchenware} alt="desk" />
                  </div>
                  <div className="text-end ">
                    <button className="show_now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-md-4 mt-3 pt-3">
              <div className="card">
                <img className="w-100" src={pink_box} alt="pink_box" />
                <div className="content h-100 ">
                  <p className="fs_24 fw-bolder text_gray">Book Shelf</p>
                  <div className="text-center w-75 m-auto h-75">
                    <img className="w-100 h-100" src={shelf} alt="shelf" />
                  </div>
                  <div className="text-end ">
                    <button className="show_now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-md-4 mt-3 pt-3">
              <div className="card">
                <img className="w-100" src={orange_box} alt="orange_box" />
                <div className="content h-100 ">
                  <p className="fs_24 fw-bolder text_gray">Electronics</p>
                  <div className="text-center w-100">
                    <img className="w-100" src={radio} alt="radio" />
                  </div>
                  <div className="text-end ">
                    <button className="show_now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- TESTIMONY --------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-4">
        <div className="my_container mt-4">
          <div className="d-flex align-items-center justify-content-md-between justify-content-center gap-lg-3 gap-2 ">
            <img
              className="d-md-block d-none"
              src={small_flower}
              alt="small_flower"
            />
            <p className="fs_36 fw-bold text-dark d-md-block d-none">
              What they say
            </p>
            <div className="flex-grow-1 border_bottom d-md-block d-none"></div>
            <p className="fs_72 text_lskyblue fw-bolder d-block">TESTIMONY</p>
          </div>

          <div className="row justify-content-lg-between justify-content-center mt-lg-4 mt-sm-3 mt-2 pt-3">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="text-center">
                <img src={room_img} alt="room_img"  className="w-100"/>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="text-center">
                <img src={kitchan_img} alt="kitchan_img" className="w-100"  />
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-lg-0 mt-4">
              <div className="testimony_box ">
                <div>
                  <img src={star} alt="star img" />
                </div>
                <p className="fs_14 fw-semibold text_gary my-3">
                  My experience with WOODIES is a complete success, from
                  customed furniture, range of product, modern design,
                  purchasing experience, the delivery and newsletter. Litterally
                  everything is great. Thank you!
                </p>
                <div className="d-flex align-items-center gap-2">
                  <img src={sandra_dewi} alt="sandra_dewi" />
                  <div>
                    <p className="fs_12 fw-semibold text_laqua">Sandra Dewi </p>
                    <p className="fs_12 fw-semibold text_laqua">
                      Jakarta Selatan
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3 pt-1">
                <div>
                  <a href="*">
                    <img src={previous} alt="previous" />
                  </a>
                </div>
                <div>
                  <a href="*">
                    <img src={next} alt="next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end mt-4">
            <img src={slider} alt="slider" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
