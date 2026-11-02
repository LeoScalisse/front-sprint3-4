const Equipe = () => {

  const integrantes = [
    {
      nome: "Allan Freire",
      funcao: "Desenvolvimento front-end",
      foto: "/images/equipe/Allan.jpg"
    },
    {
      nome: "Danilo Roque",
      funcao: "Pesquisa e requisitos",
      foto: "/images/equipe/Danilo.jpg"
    },
    {
      nome: "Leonardo Scalisse",
      funcao: "Design e experiência",
      foto: "/images/equipe/Leonardo.jpeg"
    },
    {
      nome: "Pietro Schimidt",
      funcao: "Desenvolvimento front-end",
      foto: "/images/equipe/Pietro.png"
    },
    {
      nome: "Valdemar",
      funcao: "Estratégia e apresentação",
      foto: "/images/equipe/Valdemar.jpg"
    }
  ];

  return (
    <main className="flex-1 bg-[#f7f5ef] text-[#263343]">

      {/* Apresentação */}
      <section className="bg-linear-to-br from-[#152238] to-[#183153] px-6 py-20 text-white sm:px-10 lg:px-[10%]">

        <p className="mb-4 inline-block rounded-sm border border-[#f2c66d] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c66d]">
          Pessoas que fazem acontecer
        </p>

        <h1 className="mb-6 max-w-[720px] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Uma equipe curiosa e pronta para aprender junto.
        </h1>

        <p className="max-w-[650px] text-lg leading-relaxed text-gray-200">
          A TechNova nasce da troca entre pessoas que acreditam em uma educação mais próxima e acessível.
        </p>

      </section>

      {/* Integrantes */}
      <section className="mx-auto max-w-[1120px] px-6 py-16 sm:px-10">

        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#152238]">
          Nossa equipe
        </h2>

        <p className="mb-12 max-w-[690px] leading-relaxed text-[#66717e]">
          Cada olhar completa o outro e ajuda a transformar ideias em experiências de aprendizagem.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">

          {integrantes.map((integrante, index) => (

            <article
              key={integrante.nome}
              className={`rounded-lg border border-[#183153]/10 bg-white p-7 text-center shadow-lg ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >

              <img
                src={integrante.foto}
                alt={`Foto de ${integrante.nome}`}
                className="mx-auto mb-7 h-40 w-40 rounded-full border-[7px] border-[#f2c66d] object-cover outline-2 outline-offset-4 outline-[#6f8f84]"
              />

              <h3 className="mb-2 text-xl font-bold text-[#183153]">
                {integrante.nome}
              </h3>

              <p className="text-sm font-semibold text-[#6f8f84]">
                {integrante.funcao}
              </p>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
};

export default Equipe;