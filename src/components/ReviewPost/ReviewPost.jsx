import React from "react";
import "./ReviewPost.css";

const ReviewPost = ({ post }) => {
  // console.log(post.customer.avatar);
  return (
    <div className="review-post__container">
      <div
        className="review-post__customer-img"
        style={{
          backgroundImage: `url(${post.customer.avatar})`,
        }}
      ></div>
      <div className="review-post__customer-info">
        <h4 className="review-post__customer-name">{post.customer.name}</h4>
        <p className="review-post__customer-job">{post.customer.job}</p>
        <div className="review-post__comment">{post.comment}</div>
        <div className="icon">
          <i className="fa-solid fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ReviewPost;
