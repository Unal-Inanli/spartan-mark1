import React, { FunctionComponent, useEffect, useState } from "react";

interface RowComponentProps {
    align?: "center" | "start" | "end" | "between",
    justify?: "center" | "start" | "end" | "between"
}

const Row: FunctionComponent<RowComponentProps> = ({ children, align = "start", justify = "start" }) => {

    const alignStates = {
        "center": "items-center",
        "start": "items-start",
        "end": "items-end",
        "between": "items-between",
    };
    const justifyStates = {
        "center": "justify-center",
        "start": "justify-start",
        "end": "justify-end",
        "between": "justify-between",

    };

    const [alignState, setAlignState] = useState("center");
    const [justifyState, setJustifyState] = useState("center");


    useEffect(() => {
        setAlignState(alignStates[align]);
        setJustifyState(justifyStates[justify]);
    }, []);

    return (
        <div className={`flex flex-row space-x-3 ${alignState} ${justifyState}`}>
            { children}
        </div>
    );
}



export default Row;