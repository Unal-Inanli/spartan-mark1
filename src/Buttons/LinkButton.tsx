import React, { FunctionComponent, useEffect, useState } from "react";
import { BaseButtonProps } from "./Button.types";

interface LinkButtonProps extends BaseButtonProps {
    to?: string
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({ children, buttonType = "primary", sizeType = "default", to = "#" }) => {

    const types = {
        "primary": "bg-gray-900 hover:bg-gray-500",
        "secondary": "bg-indigo-700 hover:bg-indigo-900",
        "warning": "bg-yellow-400 hover:bg-yellow-600",
        "danger": "bg-red-600 hover:bg-red-800",
        "success": "bg-green-400 hover:bg-green-600"
    };

    const sizes = {
        "sm": "md:py-1 md:px-2 py-1 px-1",
        "default": "py-2 px-3",
        "lg": "md:py-4 md:px-5 py-3 px-4",
        "xl": "md:py-5 md:px-7 py-4 px-5"
    }

    const [type, setButtonType] = useState("primary");
    const [size, setSizeType] = useState("default");

    useEffect(() => {
        setButtonType(types[buttonType]);
        setSizeType(sizes[sizeType]);
    }, []);

    return (
        <a href={to} className={`text-white text-xs md:text-base tracking-wider uppercase transition-colors duration-200 rounded font-bold ${type} ${size}`}>
            {children}
        </a>
    );
}


export default LinkButton;