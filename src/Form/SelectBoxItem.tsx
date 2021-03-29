import React, { FunctionComponent, useEffect } from 'react';

interface SelectBoxProps {
    optionValue?: string | number | readonly string[];
    selected?: Boolean;
    valueSelected?: Function;
    disabled?: Boolean;
}

const SelectBoxItem: FunctionComponent<SelectBoxProps> = ({ optionValue, valueSelected, selected = false, disabled = false }) => {

    function handleClick() {
        valueSelected(optionValue);
    }

    useEffect(() => {
        if (selected) {
            valueSelected(optionValue);
        }
    }, []);

    return (
        <p onClick={handleClick} className="text-gray-800 hover:text-white hover:bg-indigo-800 py-2 px-3 font-semibold ">{optionValue}</p>
    )
}


export default SelectBoxItem;