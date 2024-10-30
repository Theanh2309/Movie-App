import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* ctrl space */}
      <header className="z-10 flex h-14 w-full items-center justify-between bg-slate-950 px-8 text-white lg:h-20 2xl:h-32">
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Flaticon logo */}
          {/* ko co tien to sm, md... +> style mobile */}
          <Link to="/">
            <img src="/netflix.png" className="w-16 cursor-pointer sm:w-28" />
          </Link>
          <Link href="#" className="hover:text-red-400 lg:text-xl">
            Phim
          </Link>
          <Link href="#" className="hover:text-red-400 lg:text-xl">
            Truyền Hình
          </Link>
        </div>
        <div className="p-4 hover:text-red-400">
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
