import { Link } from "react-router";

const Home = () => {
  return (
<main className="relative grid min-h-[74vh] flex-1 place-items-center bg-[#152238] bg-[url('/images/foto-main.png')] bg-cover bg-center px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-[#152238]/95 to-[#152238]/45" />


      <section className="relative z-10 w-full max-w-[720px] text-white">

        <p className="mb-4 inline-block rounded-sm border border-[#f2c66d] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c66d]">
          Capturando o aprendizado
        </p>

        <h2 className="mb-4 max-w-[700px] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          A tecnologia transforma a forma de aprender.
        </h2>

        <p className="mb-8 max-w-[590px] text-lg leading-relaxed">
          A TechNova busca entregar experiências mais humanas, intuitivas e inteligentes para estudantes a partir das câmeras.
        </p>

        <Link to="/solucao" className="inline-block rounded-sm bg-[#f2c66d] px-5 py-4 font-bold text-[#152238] shadow-lg transition-transform hover:-translate-y-1">
          Conheça a solução
        </Link>

      </section>
    </main>
  );
};

export default Home;