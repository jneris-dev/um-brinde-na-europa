import { useState } from "react";
import { Input } from "./Input";

export function Login() {
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');

    const areAllFieldsFilled = (cpf != "") && (senha != "");

    return (
        <section className="w-full lg:py-20 py-16 h-auto bg-brown-texture bg-no-repeat bg-cover flex flex-col justify-center items-center px-5">
            <h1 className="text-4xl text-white font-bold uppercase mb-8">
                Login
            </h1>
            <form className="flex flex-row flex-wrap items-center">
                <div className="w-full max-w-xl mx-auto mb-8">
                    <Input
                        value={cpf}
                        setValue={setCPF}
                        id="cpf"
                        label="CPF"
                        type="text"
                        placeholder="Digite seu CPF"
                        only={true}
                        alert="Digite um CPF válido"
                    />
                </div>
                <div className="w-full max-w-xl mx-auto mb-4">
                    <Input
                        value={senha}
                        setValue={setSenha}
                        id="senha"
                        label="Senha"
                        type="password"
                        placeholder="Digite sua Senha"
                        only={true}
                    />
                </div>
                <div className="flex flex-row justify-between w-full items-center max-w-xl mx-auto mb-10">
                    <a href="" className="focus:underline hover:underline underline-offset-4 text-main-500 outline-none">
                        <span className="text-main-500 hover:text-main-600 transition-colors text-sm">
                            Ainda não é cadastrado?
                        </span>
                    </a>
                    <a href="" className="focus:underline hover:underline underline-offset-4 text-main-500 outline-none">
                        <span className="text-main-500 hover:text-main-600 transition-colors text-sm">
                            Esqueceu sua senha?
                        </span>
                    </a>
                </div>
                <div className="w-full max-w-xl mx-auto flex justify-center">
                    <button
                        type="submit"
                        disabled={!areAllFieldsFilled}
                        className={`w-44 h-12 flex items-center justify-center uppercase font-black bg-main-500 text-white rounded transition-all hover:bg-main-600 hover:ring-2 ring-offset-2 ring-offset-[#774c33] hover:ring-main-600 focus:outline-none focus:ring-main-500 focus:ring-2 ${!areAllFieldsFilled && 'cursor-not-allowed opacity-60'}`}
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </section >
    );
}