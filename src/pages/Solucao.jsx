import PesquisaWikipedia from "../components/Pesquisawikipedia";

const Solucao = () => {
  return (
    <main className="flex-1 bg-[#f7f5ef] px-6 py-16 text-[#263343] sm:px-10">

      <section className="mx-auto max-w-[1120px]">

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#152238] sm:text-5xl">
          Nossa Solução
        </h1>

        <p className="mb-6 text-lg text-[#66717e]">
          Confira os recursos que ajudam no seu estudo.
        </p>

        <p className="mb-10 max-w-[800px] text-base leading-relaxed text-[#66717e]">
          A TechNova busca oferecer experiências mais humanas, intuitivas e inteligentes para estudantes, utilizando a câmera como ferramenta de aprendizagem.
        </p>

        <ul className="grid gap-5">

          <li className="rounded-lg border-l-4 border-[#6f8f84] bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-[#183153]">
              Otimização de imagens
            </h2>
            <p className="leading-relaxed text-[#66717e]">
              Otimização de fotos tiradas em ambientes escuros ou com reflexos.
            </p>
          </li>

          <li className="rounded-lg border-l-4 border-[#6f8f84] bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-[#183153]">
              Pesquisa com inteligência artificial
            </h2>
            <p className="leading-relaxed text-[#66717e]">
              Pesquisa orientada com IA para auxiliar na exploração de funcionalidades e conteúdos.
            </p>
          </li>

          <li className="rounded-lg border-l-4 border-[#6f8f84] bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-[#183153]">
              Organização de conteúdos
            </h2>
            <p className="leading-relaxed text-[#66717e]">
              Organização direta das fotos em pastas separadas por tópicos.
            </p>
          </li>

          <li className="rounded-lg border-l-4 border-[#6f8f84] bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-[#183153]">
              Simplicidade e acessibilidade
            </h2>
            <p className="leading-relaxed text-[#66717e]">
              Uma experiência simples, intuitiva e acessível para facilitar o aprendizado.
            </p>
          </li>

        </ul>

        <PesquisaWikipedia />

      </section>
    </main>
  );
};

export default Solucao;