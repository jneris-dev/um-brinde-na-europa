import { X } from "phosphor-react";

interface PopUpProps {
    state: boolean;
    setState: (state: boolean) => void;
}

export function PopUp({ state, setState }: PopUpProps) {
    return (
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-60 w-full h-screen flex items-center justify-center px-4 z-50">
            <div className="bg-main-500 border-4 rounded border-main-600 w-full max-w-xl p-4 h-auto min-h-[150px] flex flex-col relative">
                <div className="absolute right-2 top-2">
                    <button
                        className="focus:outline-none focus:ring-1 rounded focus:ring-white"
                        onClick={() => { setState(!state), window.location.reload() }}
                    >
                        <X size={28} weight="bold" className="text-white hover:text-zinc-200" />
                    </button>
                </div>
                <p className="text-center font-bold lg:text-3xl text-2xl flex-auto flex items-center justify-center text-white">
                    Cadastro realizado com sucesso!
                </p>
            </div>
        </div>
    );
}