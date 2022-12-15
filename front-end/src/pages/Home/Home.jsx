// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/productsApi";
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";
import { useDispatch } from "react-redux";
import "./home.scss";
import { addToCart } from "../../store/cartSlice";

const Home = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isloading } = useGetAllProductsQuery();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <div className="home-container">
      {isloading ? (
        <p>Data is loading</p>
      ) : error ? (
        <p>An error occured ...</p>
      ) : (
        <>
          <h1>New Arrivals</h1>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id} id={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <div className="product_bottom">
                  <Link to="/cart">
                    <button className="product_view">View</button>
                  </Link>
                  <button
                    className="add_cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <CartSvg />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
