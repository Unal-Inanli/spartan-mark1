import React from "react";
import HeadingComponent from './Heading';
import Wrapper from "../Wrapper/Wrapper";
export default {
    title: "HeadingComponent"
};


export const Headings = () => {
    return (
        <Wrapper>
            <HeadingComponent level="1">Heading Level 1</HeadingComponent>
            <HeadingComponent level="2">Heading Level 2</HeadingComponent>
            <HeadingComponent level="3">Heading Level 3</HeadingComponent>
            <HeadingComponent level="4">Heading Level 4</HeadingComponent>
            <HeadingComponent level="5">Heading Level 5</HeadingComponent>
            <HeadingComponent level="6">Heading Level 6</HeadingComponent>
        </Wrapper>
    )
}
