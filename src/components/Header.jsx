import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-orange-600">
        Food-Fusion
      </Link>
      <Link to="/cart" className="text-lg relative">
        🛒 Cart ({cart.length})
      </Link>
    </header>
  );
};

export default Header;
