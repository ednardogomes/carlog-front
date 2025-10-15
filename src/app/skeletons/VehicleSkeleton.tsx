export default function VehicleSkeleton() {
    return (
        // Contêiner principal. Adicione a classe para a animação.
        <div className={`animate-pulse`}>
            {/* A tag <svg> contém a estrutura do seu placeholder.
        Removemos as classes de altura/largura de dentro do SVG para controlá-las
        melhor pelo contêiner ou pelas classes externas.
      */}
            <svg
                viewBox="0 0 800 400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Carregando veículo..."
                className="w-full h-full" // Garante que o SVG ocupe o contêiner
            >
                {/* Fundo do Skeleton (Geralmente um cinza mais claro) */}
                <rect width="800" height="400" fill="#f3f4f6" /> {/* Exemplo de cor cinza-clara */}

                {/* Grupos de elementos (Geralmente um cinza um pouco mais escuro) */}
                <g fill="#e5e7eb"> {/* Exemplo de cor cinza-médio */}
                    {/* Imagem Placeholder */}
                    <rect x="24" y="24" width="200" height="160" rx="8" />

                    {/* Título Principal */}
                    <rect x="240" y="40" width="520" height="28" rx="6" />

                    {/* Linha de Detalhes 1 */}
                    <rect x="240" y="80" width="420" height="18" rx="6" />

                    {/* Linha de Detalhes 2 */}
                    <rect x="240" y="110" width="340" height="18" rx="6" />
                </g>
            </svg>
        </div>
    );
};

