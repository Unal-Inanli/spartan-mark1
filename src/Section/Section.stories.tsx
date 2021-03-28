import React from 'react';
import LinkButton from '../Buttons/LinkButton';
import Wrapper from '../Wrapper/Wrapper';
import SectionHeader from "./SectionHeader";


export default {
    title: "Section Components"
}


export const SectionHeaderComponent = () => {
    return (
        <Wrapper>
            <SectionHeader sectionTitle="Products">
                <LinkButton to="#">Save</LinkButton>
            </SectionHeader>
        </Wrapper>
    )
}