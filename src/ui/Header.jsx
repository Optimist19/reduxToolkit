import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

function Header() {
  const {username} = useSelector(store => store.user)
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-500 px-4 py-3 uppercase sm:px-6 font-pizza">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <p className="hidden text-sm font-semibold md:block">{username}</p>
    </header>
  );
}

export default Header;
