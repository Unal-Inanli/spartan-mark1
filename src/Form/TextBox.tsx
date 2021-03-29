import React, { FunctionComponent } from "react";
import InputProps from "./Input.types";

interface TextBoxProps extends InputProps {

}

const TextBox: FunctionComponent<TextBoxProps> = ({ InputName, InputLabel, placeholder, valueChanged }) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2" htmlFor={InputName}>
                {InputLabel}
            </label>
            <input onChange={e => valueChanged(e.target.value)} className="block border-2 border-gray-500 placeholder-gray-500 outline-none focus:border-indigo-800 rounded p-2" type="text" name={InputName} placeholder={placeholder} />
        </div>
    )
}

export default TextBox;