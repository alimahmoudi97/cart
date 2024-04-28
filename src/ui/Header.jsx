import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import Product from "../features/products/Product";
import { useState } from "react";

function Header({ badge }) {
  const [showCart, setShowCart] = useState(false);
  const cartProducts = useSelector((state) => state.cart.entities);

  const showCartModal = (e) => {
    e.stopPropagation();
    setShowCart(true);
  };

  return (
    <div className="header">
      <div className="cart" onClick={showCartModal}>
        <FaShoppingCart className="cart__icon" />
        <span className="badge">{badge}</span>
        {showCart && (
          <Modal onClose={() => setShowCart(false)}>
            {cartProducts?.map((element, index) => (
              <Product
                key={element.id + index}
                product={element}
                modal
                index={index}
              />
            ))}
          </Modal>
        )}
      </div>
    </div>
  );
}
export default Header;
