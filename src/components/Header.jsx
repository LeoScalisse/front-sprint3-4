import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {

  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { nome: "Solução", caminho: "/solucao" },
    { nome: "Público-alvo", caminho: "/publico" },
    { nome: "Galeria", caminho: "/galeria" },
    { nome: "Nossa equipe", caminho: "/equipe" }
  ];

  return (
    <header className="bg-[#183153] text-[#f2c66d] shadow-lg">

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-4 md:flex-nowrap">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/" onClick={() => setMenuAberto(false)}>
            TechNova - JOVI
          </Link>
        </h1>

        {/* Botão hambúrguer */}
        <button
  type="button"
  onClick={() => setMenuAberto(!menuAberto)}
  aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
  aria-expanded={menuAberto}
  aria-controls="menu-principal"
  className="rounded-md border border-[#f2c66d] p-2 text-[#f2c66d] md:hidden"
>
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {menuAberto ? (
      <path d="M5 5L19 19M19 5L5 19" />
    ) : (
      <path d="M4 6H20M4 12H20M4 18H20" />
    )}
  </svg>
</button>

        {/* Navegação */}
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${menuAberto ? "block" : "hidden"} w-full md:block md:w-auto`}
        >

          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">

            {links.map((link) => (

              <li key={link.caminho}>

                <NavLink
                  to={link.caminho}
                  onClick={() => setMenuAberto(false)}
                  className={({ isActive }) => `block rounded-md px-3 py-2 transition-colors hover:bg-white/10 ${isActive ? "bg-white/10 underline underline-offset-4" : ""}`}
                >
                  {link.nome}
                </NavLink>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </header>
  );
};

export default Header;