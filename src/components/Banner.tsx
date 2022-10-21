import logoImg from '../assets/Logo-Brinde-na-Europa-Red.png'
import peoplesCloud from '../assets/Clouds.png'

import { Button } from './Button';

interface Props {
    outlet: (value: string) => void;
}

export function Banner(props: Props) {
    return (
        <section className="w-full min-h-screen flex lg:flex-row flex-col gap-8 items-center justify-center pt-24 bg-cover bg-no-repeat bg-hero-clouds px-8">
            <div className="flex flex-col items-center justify-center">
                <img
                    src={logoImg}
                    alt="Brinde na Europa"
                    className="w-full md:max-w-[286px] max-w-[206px]"
                />
                <div className="flex flex-row flex-wrap gap-5 mt-10 justify-center">
                    <Button
                        link={`/login`}
                        label="login"
                        navigate={props.outlet}
                    />
                    <Button
                        link={`/cadastro`}
                        label="cadastre-se"
                        navigate={props.outlet}
                    />
                </div>
            </div>
            <div>
                <img
                    src={peoplesCloud}
                    alt="Peoples Clouds"
                    className="w-full max-w-[934px]"
                />
            </div>
        </section>
    );
}