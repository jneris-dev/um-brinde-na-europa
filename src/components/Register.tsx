import { FormEvent, useState } from "react";

import DataService from '../services/service'
import { Input } from "./Input";

export function Register() {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const data = {
        name: nome,
        email: email,
        tax_id: cpf,
        password: senha,
        password_confirmation: confirmSenha,
        company: empresa,
        segment: classificacao,
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        // DataService.create(data).then((response) => {
        //     console.log(response.data);
        // }).catch((err) => {
        //     console.log(err);
        // });

        console.log(data)
    }

    return (
        <section className="w-full lg:py-20 py-16 h-auto bg-brown-texture bg-no-repeat bg-cover flex flex-col justify-center items-center px-5">
            <h1 className="text-4xl text-white font-bold uppercase mb-3">
                Cadastre-se
            </h1>
            <p className="text-center text-white mb-8 text-lg">
                Preencha os campos abaixo para validar sua participação<br />
                na campanha e concorrer aos prêmios
            </p>
            <form className="flex flex-row flex-wrap items-start max-w-2xl mx-auto gap-y-10" onSubmit={handleSubmit}>
                <div className="w-full">
                    <Input
                        value={nome}
                        setValue={setNome}
                        id="nome"
                        label="Nome"
                        type="text"
                        placeholder="Nome"
                        only={false}
                    />
                </div>
                <div className="w-full flex md:flex-row flex-col gap-10">
                    <div className="flex-1">
                        <Input
                            value={cpf}
                            setValue={setCPF}
                            id="cpf"
                            label="CPF"
                            type="text"
                            placeholder="Digite seu CPF"
                            only={false}
                            alert="Digite um CPF válido"
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            value={email}
                            setValue={setEmail}
                            id="email"
                            label="E-mail"
                            type="email"
                            placeholder="E-mail"
                            only={false}
                        />
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col gap-10">
                    <div className="flex-1">
                        <Input
                            value={senha}
                            setValue={setSenha}
                            id="senha"
                            label="Senha"
                            type="password"
                            placeholder="Digite sua Senha"
                            only={false}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            value={confirmSenha}
                            setValue={setConfirmSenha}
                            id="confirm-senha"
                            label="Confirmar senha"
                            type="password"
                            placeholder="Confirme sua senha"
                            only={false}
                        />
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col gap-10">
                    <div className="flex-1">
                        <Input
                            value={empresa}
                            setValue={setEmpresa}
                            id="empresa"
                            label="Empresa"
                            type="text"
                            placeholder="Empresa"
                            only={false}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            value={classificacao}
                            setValue={setClassificacao}
                            id="classificacao"
                            label="Classificação"
                            type="select"
                            placeholder="Escolha sua categoria"
                            only={false}
                            options={[
                                "Gerente", "Revendedor", "Distribuidor"
                            ]}
                        />
                    </div>
                </div>
                <div className="w-full max-w-2xl mx-auto flex justify-center">
                    <button
                        type="submit"
                        className="w-44 h-12 flex items-center justify-center uppercase font-black bg-main-500 text-white rounded transition-all hover:bg-main-600 hover:ring-2 ring-offset-2 ring-offset-[#774c33] hover:ring-main-600 focus:outline-none focus:ring-main-500 focus:ring-2"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </section >
    );
}