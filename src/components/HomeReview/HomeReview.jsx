import React from "react";
import "./HomeReview.css";
import Khoi from "../../assets/images/Customer/Fish.jpg";
import Koi from "../../assets/images/Customer/Rabbit.jpg";
import MinKoi from "../../assets/images/Customer/Perfect.jpg";
import ReviewPost from "../ReviewPost/ReviewPost";

const HomeReview = () => {
  const postsList = [
    {
      customer: {
        name: "Khoi",
        job: "Devs",
        avatar: Khoi,
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
    {
      customer: {
        name: "Koi",
        job: "Project Manager",
        avatar: Koi,
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
    {
      customer: {
        name: "MinKoi",
        job: "Business Analytics",
        avatar: MinKoi,
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
  ];
  return (
    <div className="review-section__wrapper">
      <h3 className="reivew-section__title">ý kiến từ khách hàng</h3>
      <div className="reivew-section__post-group">
        <div className="main-part">
          <ReviewPost post={postsList[0]} />
        </div>
        <div className="side-part">
          {postsList.slice(1, 3).map((post) => (
            <ReviewPost post={post} key={post.customer.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
