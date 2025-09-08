import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa sticky si el scroll vertical es mayor a 0
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar bg-base-100 bg-white shadow-sm fixed w-full z-50 p-4 transition-transform duration-300 ${
        isSticky ? "-translate-y-8 duration-300" : "-translate-y-0"
      }`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PackeJson</a>
      </div>
      <div className="flex-3">
        <div className="flex gap-4">
          <a href="#">Hombres</a>
          <a href="#">Mujeres</a>
          <a href="#">Niños</a>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-4xl shadow-xl w-100 xxl:w-auto"
        />
        <div>
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <a href="/login">
              <FaUserAlt className="w-7 h-7" />
            </a>
          </div>
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <a href="#">
              <MdShoppingCart className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
