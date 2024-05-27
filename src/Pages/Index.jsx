import React, { useState } from "react";
import HeadPhone from "../images/headphone.jpg";
// import HeadPhone from "../images/tick.png";
import greenTick from "../images/greenTick.png";
import spray from "../images/spray2.jpg";

function Index() {
  const [tick, setTick] = useState(false);
  console.log("tick", tick);
  const loggedInCart = (
    <>
      <section className="shoppingCartSection">
        <div className="custContain">
          <div className="row">
            <div className="col shopHead">
              <p>Your Cart</p>
            </div>
          </div>
          {/* activity cart */}
          <div className="mainCardDiv">
            <div className="mainSubCardDiv">
              {/* <p className="actSubHead">{item?.activity?.country?.name}</p> */}
              <p className="actSubHead">Porto</p>

              <div className="showTimeDiv">
                <p style={{ fontSize: "18px", marginBottom: "0" }}>
                  Remaining Time : &nbsp; 12:30 A.M
                </p>
              </div>
            </div>

            <div className="cardHovAn">
              <div className="row cart_table_h">
                <div className="col-md-2 text-left">
                  <h5>Image</h5>
                </div>
                <div className="col-md-5 text-left">
                  <h5>Product Information</h5>
                </div>
                <div className="col-md-3 text-left">
                  <h5>Total Price</h5>
                </div>
                <div className="col-md-2 text-left">
                  <h5>Action</h5>
                </div>
              </div>

              <div className="card mainCardPart">
                <div className="cardRow">
                  <div className="cartTextPart">
                    <div className="card-body myCardBody row">
                      <div className="cartImgPart col-md-2">
                        <figure className="cartImgFig">
                          {/* <img src={item?.activity?.image[0]} alt="..." /> */}
                          <img src={HeadPhone} alt="HeadPhone" />
                        </figure>
                        {/* <span className="iconHeart">
                            <i className="fa-regular fa-heart"></i>
                          </span> */}
                      </div>
                      <div className="col-md-5 product_info_div">
                        <div className="cartTextParent">
                          {/* <p className="entryTicText">Entry ticket</p> */}
                          <div className="cartTextParent">
                            <div>
                              <p className="parText">
                                {/* {item?.activity?.activityTitle} */}
                                Item New Activity Title
                              </p>
                              {/* <p className="acText">Access</p> */}
                            </div>
                            {/* <p className="fromP">From</p> */}
                          </div>
                          <div className="cartTextFirstParentSub d-none d-sm-flex">
                            <p className="numRateP">
                              {/* {+item?.activity?.reviewRating?.toFixed(1) || 0} /
                              5 */}
                              3/55
                            </p>
                            <div className="startRatePart">
                              <i
                              // data-star={item?.activity?.reviewRating?.toFixed(
                              //   1
                              // )}
                              >
                                *****
                              </i>
                            </div>
                            <p className="userNumber">
                              {/* ({item?.activity?.totalReview}) */}
                              27
                            </p>
                          </div>
                          <div className="firstParDiv">
                            <p className="greenClrText">
                              {/* Starting Time : {item?.statingTime} */}
                              Starting Time : 8.00 AM
                            </p>
                          </div>
                        </div>

                        <div className="cartTextFirstParentSub d-flex d-sm-none">
                          <p className="numRateP">
                            {/* {+item?.activity?.reviewRating?.toFixed(1) || 0} / 5 */}
                            3/5
                          </p>
                          <div className="startRatePart">
                            <i
                            // data-star={item?.activity?.reviewRating?.toFixed(
                            //   1
                            // )}
                            >
                              {" "}
                              *****{" "}
                            </i>
                          </div>
                          <p className="userNumber">
                            {/* ({item?.activity?.totalReview}) */}
                            27
                          </p>
                        </div>
                        <div className="additionalBtn">
                          <div className="btn1">
                            <div className="card_btn">
                              <input
                                type="checkbox"
                                name=""
                                value={tick}
                                onChange={() => setTick(!tick)}
                              />
                              <span className="card_btn_txt">sdghfsdhgfjh</span>
                              {tick ? (
                                <div
                                  className="tick"
                                  onClick={() => setTick(false)}
                                ></div>
                              ) : (
                                ""
                              )}
                            </div>

                            <span className="card_btn_out_txt">
                              <i class="fa fa-usd" aria-hidden="true"></i>{" "}
                              235.36
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="cartTextParent card_price col-md-3">
                        {/* <div className="firstParDiv">
                                  <p className="greenClrText">
                                    Starting Time : {item?.statingTime}
                                  </p>
                                </div> */}
                        {/* <p className="greenClrText">Skip the line</p> */}
                        {/* <p className="greenClrText">Access by Elevator</p> */}
                        <div className="cartSubTextPart">
                          <p className="text1000">Total Price</p>
                          <div className="secondParDiv">
                            <p className="text1000">
                              {/* {item?.activity?.currency?.symbol}{" "}
                              {item?.totalPrice?.toFixed(2)} */}
                              $ 225.50
                            </p>
                            {/* <p className="perPText">per Person</p> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2 card_rmv_btn">
                        <button
                          className="btn btn-sm btn-danger myRemoveBtn"
                          // onClick={() => removeCartItem(item?._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place Order */}
          {/* {(cart?.cart_activity?.length !== 0 ||
            cart?.cart_giftcard?.length !== 0) && (
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button
                className="btn btn-success"
                style={{ fontWeight: "700", fontSize: "18px" }}
                onClick={(e) => {
                  e.preventDefault();

                  navigate("/make-payment");
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          )} */}
        </div>
      </section>
    </>
  );

  const guestCart = (
    <>
      <div className="col shopHead">
        <p>Your Cart</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={HeadPhone}
          alt=""
          height="100px"
          width="100px"
          className="fade-in"
        />
        <p
          className="tracking-in-expand"
          style={{
            textAlign: "center",
            color: "red",
            padding: "5px",
            fontSize: "25px",
            margin: "0",
          }}
        >
          Your cart has no items in it !
        </p>
      </div>
      <p style={{ textAlign: "center" }}>Sync your cart across devices:</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <div className="findThinsDiv">
          <div
            className="findThAN"
            onClick={(e) => {
              e.preventDefault();
              // setShowLoginModal(true);
            }}
          >
            Log in / Sign up
          </div>
        </div>
      </div>
      {/* {cart?.cart_activity[length1 - 1]?.activity?._id && (
        <TopActivityCity activites={activityy?.Top_activity} />
      )} */}
      ;{/* <PopularDestinations /> */}
    </>
  );
  // return <>{loginStatus ? loggedInCart : guestCart}</>;
  return <>{loggedInCart}</>;
}

export default Index;
