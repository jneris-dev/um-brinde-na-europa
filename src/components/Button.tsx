import { ButtonProps } from "../interface/interfaces";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Button(props: ButtonProps) {
    return (
        <AnchorLink href="#outlet" offset="100">
            <button
                onClick={() => props.navigate(props.label)}
                className="w-44 h-12 flex items-center justify-center uppercase font-black bg-main-500 text-white rounded transition-all hover:bg-main-600 hover:ring-2 ring-offset-2 hover:ring-main-600 focus:outline-none focus:ring-main-500 focus:ring-2"
            >
                {props.label}
            </button>
        </AnchorLink>
    );
}