import { useState } from "react";
import { NavLink } from "react-router";

// Components
import NavBarBtn from "./NavBarBtn";

interface NavLinkState {
  isActive: boolean;
}

const navItems = [
  // { to: "/about", label: "Hegnstyper" },
  // { to: "/about", label: "Rydning" },
  // { to: "/about", label: "Hegnsloven" },
  { to: "/about", label: "Om os" },
  // { to: "/about", label: "Kontakt os" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="bg-primary-black text-white block w-full z-40">
        <div className="relative mx-auto flex items-center justify-between px-4 h-16">
          <NavLink to="/" className="flex-shrink-0 z-40">
            <img src="/images/navlogo.webp" alt="HegnXperten" className="h-8" />
          </NavLink>

          {/* Dropdown button */}
          <NavBarBtn menuOpen={menuOpen} handleOnOpen={handleOnOpen} />

          {/* Desktop nav */}

          <nav className="hidden lg:flex lg:items-center lg:space-x-8 list-none">
            <ul className="gap-5 flex  text-xl font-medium">
              <li className="flex gap-5">
                {navItems.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end
                    className={({ isActive }: NavLinkState) =>
                      "transition-colors "
                    }
                  >
                    {label}
                  </NavLink>
                ))}

                <ul className="gap-5 md:flex  opacity-30 ">
                  <li className="cursor-not-allowed">Hegnstyper</li>
                  <li className="cursor-not-allowed">Rydning</li>
                  <li className="cursor-not-allowed">Hegnsloven</li>
                  <li className="cursor-not-allowed">Kontakt os</li>
                </ul>
              </li>
            </ul>
          </nav>
          <NavLink
            to="/getoffer"
            className="hidden lg:block bg-accent-green text-white font-semibold px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Indhent tilbud
          </NavLink>
        </div>
      </div>

      {/* Mobile nav  */}
      <div
        className={`fixed lg:hidden block inset-0 bg-primary-black z-30 transform origin-top transition-transform duration-500 ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="mx-5 flex flex-col justify-around h-full space-y-6 text-xl font-medium text-white">
          <li>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setMenuOpen(false)}
                className={`text-white text-xl font-medium  my-5 ${
                  menuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {label}
              </NavLink>
            ))}

            <ul className="gap-5 md:flex  opacity-30 ">
              <li className="cursor-not-allowed">Hegnstyper</li>
              <li className="cursor-not-allowed">Rydning</li>
              <li className="cursor-not-allowed">Hegnsloven</li>
              <li className="cursor-not-allowed">Kontakt os</li>
            </ul>
          </li>

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
