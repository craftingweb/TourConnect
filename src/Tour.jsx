import { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 220)}...`}</p>
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "read less" : "read more"}
        </button>
      </div>
      <button
        className="btn btn-block delete-btn"
        onClick={() => {
          removeTours(id);
        }}
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;
