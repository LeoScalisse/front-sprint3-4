const Publico = () => {
  return (
    <main className="flex-1 bg-[#f7f5ef] text-[#263343]">

      {/* Apresentação da página */}
      <section className="bg-gradient-to-br from-[#152238] to-[#183153] px-6 py-20 text-white sm:px-10 lg:px-[10%]">

        <p className="mb-4 inline-block rounded-sm border border-[#f2c66d] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c66d]">
          Para aprender com autonomia
        </p>

        <h1 className="mb-6 max-w-[720px] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Feita para quem transforma curiosidade em descoberta.
        </h1>

        <p className="max-w-[650px] text-lg leading-relaxed text-gray-200">
          A solução acolhe estudantes, educadores e instituições de ensino.
        </p>

      </section>

      {/* Conteúdo principal */}
      <section className="mx-auto max-w-[1120px] px-6 py-16 sm:px-10">

        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#152238]">
          Pessoas no centro
        </h2>

        <p className="mb-10 max-w-[690px] leading-relaxed text-[#66717e]">
          A TechNova se adapta à rotina de estudo e torna o caminho de aprender mais simples.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Grupos de público */}
          <div className="grid gap-6">

            <article className="border-b border-[#d9ddd9] pb-5">
              <h3 className="mb-2 text-xl font-semibold text-[#6f8f84]">
                Estudantes
              </h3>
              <p className="leading-relaxed text-[#66717e]">
                Para quem deseja compreender conteúdos com mais confiança.
              </p>
            </article>

            <article className="border-b border-[#d9ddd9] pb-5">
              <h3 className="mb-2 text-xl font-semibold text-[#6f8f84]">
                Educadores
              </h3>
              <p className="leading-relaxed text-[#66717e]">
                Para professores que querem complementar a aula.
              </p>
            </article>

            <article className="border-b border-[#d9ddd9] pb-5">
              <h3 className="mb-2 text-xl font-semibold text-[#6f8f84]">
                Instituições
              </h3>
              <p className="leading-relaxed text-[#66717e]">
                Para escolas que valorizam inovação e acessibilidade.
              </p>
            </article>

          </div>

          {/* Caixa de destaque */}
          <aside className="self-start rounded-lg bg-gradient-to-br from-[#183153] to-[#254b65] p-8 text-white shadow-lg">

            <h3 className="mb-5 text-2xl font-bold text-[#f2c66d]">
              O que importa
            </h3>

            <ul className="list-disc space-y-4 pl-5 leading-relaxed">
              <li>Orientações claras</li>
              <li>Uso simples</li>
              <li>Mais autonomia</li>
            </ul>

          </aside>

        </div>

      </section>
    </main>
  );
};

export default Publico;