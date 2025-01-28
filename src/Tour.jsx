const Tour = ({ id, name, image, info, price, removeTours }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
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
