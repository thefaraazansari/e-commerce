import { Outlet, Link } from "react-router-dom";
import "./styles.css";

export default function Card({ id, title, image, price, rating }) {
  return (
    <div className="card">
      <Link className="link" to={`/${id}`}>
        <div className="product-info">
          <img className="product-image" src={image} alt=""></img>
          <span className="product-title">{title}</span>
          <span className="product-price">${price}</span>
          <span className="product-rating">Ratings: ({rating.rate}/5)</span>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
