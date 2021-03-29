import React, { FunctionComponent, useEffect, useState } from 'react';
import { SelectBox, SelectBoxItem } from "./Form";

const SelectExampleForm: FunctionComponent = ({ }) => {

    const [alphabetState, setAlphabetState] = useState();

    function handleValueSelected(value) {
        console.log(value);

        setAlphabetState(value);
    }

    return (
        <form action="">
            <SelectBox selectedValue={alphabetState} InputName="Alphabet" InputLabel="Alphabet" placeholder="Please enter a password" >
                <SelectBoxItem valueSelected={handleValueSelected} optionValue="ABC" />
                <SelectBoxItem valueSelected={handleValueSelected} optionValue="BCA" />
                <SelectBoxItem valueSelected={handleValueSelected} optionValue="CBA" selected={true} />
                <SelectBoxItem valueSelected={handleValueSelected} optionValue="ACB" />
            </SelectBox>
        </form>
    )
}

export default SelectExampleForm;