import type { FC } from "react";

interface NavBarBtnProps {
  menuOpen: boolean;
  handleOnOpen: () => void;
}

const NavBarBtn: FC<NavBarBtnProps> = ({ menuOpen, handleOnOpen }) => {
  return (
    <button
      onClick={handleOnOpen}
      className="lg:hidden focus:outline-none fixed right-3 z-40"
      aria-label="Toggle menu"
    >
      {menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default NavBarBtn;
