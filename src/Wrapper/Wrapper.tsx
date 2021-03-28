import React, { FunctionComponent } from "react";

import { WrapperComponentProps } from "./Wrapper.types";


const Wrapper: FunctionComponent<WrapperComponentProps> = ({ children }) => {

    return (
        <div className="bg-white dark:bg-gray-900 p-5">
            {children}
        </div>
    );
}


export default Wrapper;