import { useState } from "react";
import { NavLink } from "react-router";

// Components
import NavBarBtn from "./NavBarBtn";

interface NavLinkState {
  isActive: boolean;
}

const navItems = [
  { to: "/about", label: "Hegnstyper" },
  { to: "/about", label: "Rydning" },
  { to: "/about", label: "Hegnsloven" },
  { to: "/about", label: "Om os" },
  { to: "/about", label: "Kontakt os" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-primary-black text-white block w-full z-40">
        <div className="relative mx-auto flex items-center justify-between px-4 h-16">
          <NavLink to="/" className="flex-shrink-0 z-40">
            <img src="/images/navlogo.webp" alt="HegnXperten" className="h-8" />
          </NavLink>

          {/* Dropdown button */}
          <NavBarBtn menuOpen={menuOpen} handleOnOpen={handleOnOpen} />

          {/* Desktop nav */}

          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }: NavLinkState) =>
                  "font-medium pb-1 transition-colors "
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/getoffer"
            className="hidden lg:block bg-accent-green text-white font-semibold px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Indhent tilbud
          </NavLink>
        </div>
      </header>

      {/* Mobile nav  */}
      <div
        className={`fixed lg:hidden block inset-0 bg-primary-black z-30 transform origin-top transition-transform duration-500 ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="mx-5 flex flex-col justify-around h-full space-y-6">
          <div className=" flex flex-col justify-around">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={`text-white text-xl font-medium transform duration-300 my-5 ${
                    menuOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </div>
          <li>
            <NavLink
              to="/getoffer"
              onClick={() => setMenuOpen(false)}
              className={`bg-accent-green text-white font-semibold px-6 py-3 rounded text-lg transform duration-300 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Indhent tilbud
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
