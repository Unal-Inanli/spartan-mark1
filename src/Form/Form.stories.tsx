import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Wrapper from "../Wrapper/Wrapper";
import { TextBox, PasswordBox, SelectBox, SelectBoxItem } from "./Form";
import SelectExampleForm from './SelectExampleForm';
export default {
    title: "Form Elements"
}

export const Inputs = () => {
    return (
        <Wrapper>
            <Heading level="2">Text Box</Heading>
            <TextBox InputName="username" InputLabel="Username" placeholder="Please enter a username" />
            <Heading level="2">Password Box</Heading>
            <PasswordBox InputName="password" InputLabel="Password" placeholder="Please enter a password" />
            <Heading level="2">Select Box Regular</Heading>
            <SelectExampleForm />

        </Wrapper>
    )
}