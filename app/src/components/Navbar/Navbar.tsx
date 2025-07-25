import { useState } from "react";
import { NavLink } from "react-router";

// Components
import NavBarBtn from "./NavBarBtn";

interface NavLinkState {
  isActive: boolean;
}

const navItems = [
  { to: "/hegnsloven", label: "Hegnsloven" },
  { to: "/about", label: "Om os" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-stone-900 text-white block w-full z-40">
        <div className=" mx-auto flex items-center justify-between px-4 h-16">
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
            to="/kontakt"
            className="hidden lg:block bg-green-700 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Indhent tilbud
          </NavLink>
        </div>
      </header>

      {/* Mobile nav  */}
      <div
        className={`fixed lg:hidden block inset-0 bg-stone-900 z-30 transform origin-top transition-transform duration-500 ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="mx-5 flex flex-col justify-around h-full space-y-6">
          <div>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }: NavLinkState) =>
                    "text-white text-xl font-medium transition-colors " +
                    (isActive ? "text-accent-green" : "hover:text-accent-green")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </div>
          <li>
            <NavLink
              to="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded text-lg"
            >
              Indhent tilbud
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
