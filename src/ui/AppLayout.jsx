import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { fetchProducts } from "../redux/product/productReducer";
import { cartDetails } from "../redux/cart/cartReducer";
import Home from "../pages/Home";

function AppLayout() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(cartDetails());
  }, [dispatch]);

  return (
    <div>
      <Header badge={cart.entities.length} />
      <Home products={products} />
    </div>
  );
}
export default AppLayout;
