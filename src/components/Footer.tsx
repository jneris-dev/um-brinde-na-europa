export function Footer() {
    return (
        <footer className="w-full bg-main-500 h-auto py-4 px-4">
            <div className="flex flex-row flex-wrap lg:justify-between justify-center items-center mx-auto max-w-7xl gap-4 text-center">
                <p className="text-sm text-white">
                    Dúvidas? Envie um e-mail para <a href="mail:atendimento@umbrindenaeuropa.com.br" className="text-[#653a23] hover:underline focus:underline underline-offset-4 focus:outline-none">atendimento@umbrindenaeuropa.com.br</a>
                </p>
                <p className="text-sm text-white">
                    Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.
                </p>
            </div>
        </footer>
    );
}