import React, { useEffect, useState } from "react";

import { HeadingComponentProps } from "./Heading.types";

const Heading: React.FC<HeadingComponentProps> = ({ level, children }) => {
    const levels = {
        "1": "md:text-5xl text-3xl py-6",
        "2": "md:text-4xl text-2xl py-5",
        "3": "md:text-3xl text-xl py-4",
        "4": "md:text-2xl text-lg py-3",
        "5": "md:text-xl text-base py-2",
        "6": "md:text-lg text-sm py-1",
    }



    const [headingLevel, setHeadingLevel] = useState("1");

    useEffect(() => {
        setHeadingLevel(levels[level]);
    }, []);

    return (
        <h1
            className={`${headingLevel} font-bold text-gray-900 dark:text-white`}
        >
            {children}
        </h1>
    )
};


export default Heading;