import { useState } from "react";

const PesquisaWikipedia = () => {

    const [termo, setTermo] = useState("");
    const [estado, setEstado] = useState({status: "inicial", resultado: null});

    const pesquisar = async (evento) => {
        evento.preventDefault();

        const busca = termo.trim();
        if(!busca) return;

        setEstado({status:"carregando", resultado: null})

        try{
            const url = "https://pt.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(busca);

            const resposta = await fetch(url);

            if(resposta.status === 404){
                setEstado({status: "naoEncontrado", resultado: null})
                return;
            }
            if(!resposta.ok){
                throw new Error("Não foi possível realizar a pesquisa " + resposta.status);
            }

            const dados = await resposta.json();

            if (dados.type === "disambiguation" || !dados.extract){
                setEstado({status: "ambiguo", resultado: dados});
                return;
            }

            setEstado({status: "ok", resultado: dados});
        }catch (erro){
            console.error("Não foi possível realizar a pesquisa:", erro);
            setEstado({status:"erro", resultado:null});
        }
    };

    const {status, resultado} = estado;

    return (
        <section className="mt-12 rounded-lg bg-gradient-to-br from-[#183153] to-[#254b65] p-8 text-white shadow-lg">
    
        <h2 className="mb-2 text-2xl font-bold text-[#f2c66d]">
            Pesquise um tema
        </h2>
    
        <p className="mb-6 max-w-[620px] leading-relaxed text-gray-200">
            Caso queira se aprofundar em algum dos assuntos abordados, pesquise aqui!
        </p>
    
        <form onSubmit={pesquisar} className="flex flex-col gap-3 sm:flex-row">
    
            <label htmlFor="pesquisa-tema" className="sr-only">
            Tema para pesquisar
            </label>
    
            <input
            id="pesquisa-tema"
            type="text"
            value={termo}
            onChange={(evento) => setTermo(evento.target.value)}
            placeholder="Ex.: Inteligência Artificial"
            className="w-full flex-1 rounded-sm bg-white px-4 py-3 text-[#152238] placeholder:text-[#66717e]"
            />
    
            <button
            type="submit"
            disabled={status === "carregando"}
            className="rounded-sm bg-[#f2c66d] px-5 py-3 font-bold text-[#152238] shadow-lg transition-transform hover:-translate-y-1 disabled:opacity-60"
            >
            {status === "carregando" ? "Pesquisando..." : "Pesquisar"}
            </button>
    
        </form>
    
        <div aria-live="polite" className="mt-6">
    
            {status === "carregando" && (
            <p className="text-gray-200">Buscando informações...</p>
            )}
    
            {status === "naoEncontrado" && (
            <p className="text-gray-200">
                Não encontramos esse tema. Tente outro termo ou confira a escrita.
            </p>
            )}
    
            {status === "ambiguo" && (
            <p className="text-gray-200">
                Esse termo tem vários significados. Tente ser mais específico.
            </p>
            )}
    
            {status === "erro" && (
            <p className="text-gray-200">
                Não foi possível pesquisar agora. Tente novamente em instantes.
            </p>
            )}
    
            {status === "ok" && (
            <article className="flex flex-col gap-5 rounded-lg bg-white p-6 text-[#263343] sm:flex-row">
    
                {resultado.thumbnail && (
                <img
                    src={resultado.thumbnail.source}
                    alt={`Imagem de ${resultado.title}`}
                    loading="lazy"
                    className="h-40 w-full rounded-lg object-cover sm:w-40"
                />
                )}
    
                <div>
                <h3 className="text-xl font-bold text-[#183153]">
                    {resultado.title}
                </h3>
    
                {resultado.description && (
                    <p className="mb-2 text-sm font-semibold text-[#6f8f84]">
                    {resultado.description}
                    </p>
                )}
    
                <p className="leading-relaxed text-[#66717e]">
                    {resultado.extract}
                </p>
    
                <a
                    href={resultado.content_urls.desktop.page}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-semibold text-[#183153] underline underline-offset-4"
                >
                    Ler artigo completo na Wikipedia
                </a>
                </div>
    
            </article>
            )}
    
        </div>
    
        </section>
  );
};

export default PesquisaWikipedia;