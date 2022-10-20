import logoImg from '../assets/logo-campanha-red.png'

export function About() {
    return (
        <section className="w-full h-auto lg:py-20 py-16 bg-white-texture bg-cover bg-no-repeat px-5">
            <div className="flex md:flex-row flex-col mx-auto gap-10 max-w-7xl justify-around items-center">
                <div className="md:w-3/5 w-full md:order-1 order-2">
                    <h2 className="uppercase text-zinc-700 mb-4 font-bold sm:text-3xl text-2xl leading-relaxed">
                        Só quem vende curte as<br />
                        experiências mais diferentonas!
                    </h2>
                    <p className="text-zinc-800 text-sm text-justify">
                        *Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o Setor Público não serão válidas. A apuração do mês de agosto será retroativa. Imagens meramente ilustrativas. Realizamos todos os esforços para garantir a precisão das informações, mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto, informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtos e serviços podem ser marcas registradas ou marcas de serviços de terceiros. © 2020. Todos os direitos reservados.
                    </p>
                </div>
                <div className="w-auto md:order-2 order-1">
                    <img
                        src={logoImg}
                        className="max-w-full h-auto"
                        alt="Logo Um brinde na Europa"
                    />
                </div>
            </div>
        </section>
    );
}