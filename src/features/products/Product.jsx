import { useDispatch, useSelector } from "react-redux";
import { cartAdd, cartRemove } from "../../redux/cart/cartReducer";
import { useState } from "react";

function Product({ product, modal = false, index = null }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cartAdd(product));
  };

  const removeProductFromCart = (e) => {
    e.preventDefault();
    dispatch(cartRemove(index));
  };

  return (
    <div className="product">
      <img src={product.image} />
      <div className="product__details">
        <h3>{product.title}</h3>
        <div className="product__footer">
          <span className="product__price">500000 تومان</span>
          {modal ? (
            <button className="btn btn--remove" onClick={removeProductFromCart}>
              حذف کردن از سبد خرید
            </button>
          ) : (
            <button className="btn btn--primary" onClick={handleClick}>
              افزودن به سبد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Product;
