import type { FC } from "react";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

interface NavBarBtnProps {
  menuOpen: boolean;
  handleOnOpen: () => void;
}

const NavBarBtn: FC<NavBarBtnProps> = ({ menuOpen, handleOnOpen }) => {
  return (
    <button
      onClick={handleOnOpen}
      className="lg:hidden focus:outline-none absolute right-3 z-40"
      aria-label="Toggle menu"
    >
      {menuOpen ? (
        <IoMdClose className="h-7 w-7" />
      ) : (
        <RxHamburgerMenu className="h-7 w-7" />
      )}
    </button>
  );
};

export default NavBarBtn;
