import { Link, NavLink } from "react-router";
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between gap-6 bg-[#183153] px-8 py-6 text-[#f2c66d] md:flex-row">

      <h1 className="text-xl font-bold">
        <Link to="/">
          TechNova - JOVI
        </Link>
      </h1>

      <nav aria-label="Navegação principal">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">

          <li>
            <NavLink to="/solucao" className="hover:underline">
              Solução
            </NavLink>
          </li>

          <li>
            <NavLink to="/publico" className="hover:underline">
              Público-alvo
            </NavLink>
          </li>

          <li>
            <NavLink to="/galeria" className="hover:underline">
              Galeria
            </NavLink>
          </li>

          <li>
            <NavLink to="/equipe" className="hover:underline">
              Nossa equipe
            </NavLink>
          </li>

        </ul>
      </nav>

    </header>
  );
};

export default Header;