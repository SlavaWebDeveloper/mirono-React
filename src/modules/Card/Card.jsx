import classNames from "classnames";
import './card.scss'
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

export const Card = ({ className, id, img, title, dateDelivery, price }) => {

  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, dateDelivery, price }))
  }

  return (
    <article className={classNames(className, 'card')}>
      <img
        className="card__image"
        src={img}
        alt={title}
      />
      <div className="card__content">
        <h3 className="card__title">
          {title}
        </h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button
            onClick={handlerAddToCart}
            className="card__button"
          >
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  )

}