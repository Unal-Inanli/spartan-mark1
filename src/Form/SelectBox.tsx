import React, { Children, FunctionComponent, useEffect, useState } from 'react';
import InputProps from "./Input.types";


interface SelectBoxProps extends InputProps {
    selectedValue: any,
}

const SelectBox: FunctionComponent<SelectBoxProps> = ({ selectedValue, InputLabel, InputName, children }) => {

    const [selectValueState, setSelectValueState] = useState();
    const [selectToggleState, setSelectToggleState] = useState(false);

    function handleSelectToggle() {
        setSelectToggleState(!selectToggleState);
    }

    useEffect(() => {
        setSelectValueState(selectedValue);
    }, [selectedValue]);

    return (
        <div className="flex flex-col">
            <label className="mb-2" htmlFor={InputName}>
                {InputLabel}
            </label>
            <input type="hidden" value={selectValueState} name={InputName} />
            <div onClick={handleSelectToggle} className="relative border-2 border-gray-500 placeholder-gray-500 outline-none active:border-indigo-800 rounded p-2 flex items-center justify-between" >
                <p>{selectValueState}</p>
                <svg className={`${selectToggleState ? "transform rotate-180" : ""} transition-transform duration-200 h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <div className={`transform transition-all origin-top-left ${selectToggleState ? "scale-100 opacity-100 " : "opacity-0 scale-0"} duration-200 absolute w-full left-0 top-full shadow-lg`}>
                    {children}
                </div>
            </div>

        </div>
    );
}

export default SelectBox;