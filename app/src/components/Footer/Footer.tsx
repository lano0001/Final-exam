import { NavLink } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm">
        <ul className="space-y-2">
          <li>Industrigrenen 15</li>
          <li>2635 Ishøj</li>
          <li>Danmark</li>
          <li className="pt-4">+45 31 41 88 80</li>
          <li>kontakt@hegnexperten.dk</li>
          <li>CVR: 43297082</li>
          <li>Listepunkt</li>
        </ul>

        <div className="flex justify-center">
          <NavLink to="/" className="flex-shrink-0">
            <img src="/images/navlogo.webp" alt="HegnXperten" className="h-8" />
          </NavLink>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="text-accent-green font-semibold">
            Klar til at få et tilbud?
          </div>
          <NavLink to="/getoffer">
            <button className="bg-accent-green hover:bg-green-700 text-white px-4 py-2 rounded">
              Indhent tilbud
            </button>
          </NavLink>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-accent-green hover:text-green-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-accent-green hover:text-green-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-accent-green hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
