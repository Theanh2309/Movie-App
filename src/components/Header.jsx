import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      {/* ctrl space */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-4">
          {/* Flaticon logo */}
          {/* ko co tien to sm, md... +> style mobile */}
          <img src="./netflix.png" className="w-16 cursor-pointer sm:w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền Hình</a>
        </div>
        <div>
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
