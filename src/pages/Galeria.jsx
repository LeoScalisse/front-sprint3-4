const Galeria = () => {

  const fotos = [
    {
      id: 1,
      imagem: "/images/galeria/foto-projeto1.png",
      descricao: "Primeira imagem do projeto JOVI"
    },
    {
      id: 2,
      imagem: "/images/galeria/foto-projeto2.png",
      descricao: "Segunda imagem do projeto JOVI"
    }
  ];

  return (
    <main className="flex-1 bg-[#f7f5ef] text-[#263343]">

      {/* Apresentação */}
      <section className="bg-linear-to-br from-[#152238] to-[#183153] px-6 py-20 text-white sm:px-10 lg:px-[10%]">

        <p className="mb-4 inline-block rounded-sm border border-[#f2c66d] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c66d]">
          Um olhar sobre a jornada
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Fotos do projeto
        </h1>

      </section>

      {/* Galeria de imagens */}
      <section className="mx-auto max-w-[1120px] px-6 py-16 sm:px-10">

        <h2 className="mb-10 text-4xl font-bold tracking-tight text-[#152238]">
          Galeria
        </h2>

        <div className="flex flex-col items-center gap-6">

          {fotos.map((foto) => (
            <img
              key={foto.id}
              src={foto.imagem}
              alt={foto.descricao}
              loading="lazy"
              className="h-auto w-full max-w-[750px] rounded-lg shadow-lg"
            />
          ))}

        </div>

      </section>

    </main>
  );
};

export default Galeria;