import { FormEvent, useState } from "react";
import { CircleNotch } from "phosphor-react";
import PasswordStrengthBar from 'react-password-strength-bar';

import DataService from '../services/service';

import { Input } from "./Input";
import { PopUp } from "./PopUp";

export function Register() {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const [loading, setLoading] = useState(false);
    const [strongPassword, setStrongPassword] = useState(false);
    const areAllFieldsFilled = (nome != "") && (cpf != "") && (email != "") && (senha != "") && (confirmSenha != "") && (empresa != "") && (classificacao != "") && strongPassword;
    const [showPopUp, setShowPopUp] = useState(false);

    const data = {
        name: nome,
        email: email,
        tax_id: cpf.replace(/[^\w\s]/gi, ''),
        password: senha,
        password_confirmation: confirmSenha,
        company: empresa,
        segment: classificacao,
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true)

        DataService.create(data).then((response) => {
            console.log(response.data);
            setShowPopUp(true)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        });
    }

    return (
        <>
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
                            data={data}
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
                                data={data}
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
                                alert="Digite um e-mail válido"
                                only={false}
                                data={data}
                            />
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row flex-col gap-10">
                        <div className="flex-1 relative">
                            <Input
                                value={senha}
                                setValue={setSenha}
                                id="senha"
                                label="Senha"
                                type="password"
                                placeholder="Digite sua Senha"
                                only={false}
                                data={data}
                                alert="A senha não corresponde"
                            />
                            <PasswordStrengthBar
                                password={senha}
                                scoreWordClassName="!text-white"
                                minLength={3}
                                scoreWords={
                                    ['fraco', 'fraco', 'ok', 'bom', 'forte']
                                }
                                shortScoreWord={''}
                                onChangeScore={(score, feedback) => { score >= 2 ? setStrongPassword(true) : setStrongPassword(false) }}
                            />
                        </div>
                        <div className="flex-1 relative">
                            <Input
                                value={confirmSenha}
                                setValue={setConfirmSenha}
                                id="confirm-senha"
                                label="Confirmar senha"
                                type="password"
                                placeholder="Confirme sua senha"
                                alert="A senha não corresponde"
                                only={false}
                                data={data}
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
                                data={data}
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
                                data={data}
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-2xl mx-auto flex justify-center">
                        <button
                            type="submit"
                            disabled={!areAllFieldsFilled}
                            className={`w-44 h-12 flex items-center justify-center gap-1 uppercase font-black bg-main-500 text-white rounded transition-all hover:bg-main-600 hover:ring-2 ring-offset-2 ring-offset-[#774c33] hover:ring-main-600 focus:outline-none focus:ring-main-500 focus:ring-2 ${!areAllFieldsFilled && 'cursor-not-allowed opacity-60'}`}
                        >
                            {loading && <CircleNotch size={22} weight="bold" className="animate-spin" />}
                            Enviar
                        </button>
                    </div>
                </form>
            </section>

            {showPopUp && <PopUp state={showPopUp} setState={setShowPopUp} />}
        </>
    );
}