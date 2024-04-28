import Product from "../features/products/Product";

function Home({ products }) {
  return (
    <div className="products container">
      <h1>محصولات</h1>
      {products.products.map((element) => (
        <Product key={element.id} product={element} />
      ))}
    </div>
  );
}
export default Home;
