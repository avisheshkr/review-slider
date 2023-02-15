import { FaQuoteRight } from "react-icons/fa";

const SingleReview = ({ position, review }) => {
  const { name, post, quote, profile } = review;

  return (
    <div className={`container ${position}`}>
      <div className="image-container">
        <img src={profile} alt="Profile" />
      </div>
      <span className="name">{name}</span>
      <span className="post">{post}</span>
      <p>{quote}</p>
      <FaQuoteRight className="quote" />
    </div>
  );
};

export default SingleReview;
