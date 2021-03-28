import React from 'react';
import ActionButton from './ActionButton';
import LinkButton from "./LinkButton";
import Row from "../Layout/Row/Row";
import Wrapper from "../Wrapper/Wrapper";
import Heading from "../Heading/Heading";
export default {
    title: "Buttons"
};

function log() {
    console.log("clicked");
}

export const ActionButtons = () => {
    return (
        <Wrapper>
            <Heading level="2">Action Button Types</Heading>
            <Row>
                <ActionButton click={log} buttonType="primary">Primary</ActionButton>
                <ActionButton click={log} buttonType="secondary">Secondary</ActionButton>
                <ActionButton click={log} buttonType="warning">Warning</ActionButton>
                <ActionButton click={log} buttonType="danger">Danger</ActionButton>
                <ActionButton click={log} buttonType="success">Success</ActionButton>
            </Row>
            <Heading level="2">Action Button Sizes</Heading>
            <Row align="end">
                <ActionButton click={log} buttonType="primary" sizeType="sm">Small</ActionButton>
                <ActionButton click={log} buttonType="primary" sizeType="default">Default</ActionButton>
                <ActionButton click={log} buttonType="primary" sizeType="lg">Large</ActionButton>
                <ActionButton click={log} buttonType="primary" sizeType="xl">XLarge</ActionButton>

            </Row>
        </Wrapper>

    );
}



export const LinkButtons = () => {
    return (
        <Wrapper>
            <Heading level="2">Link Button Types</Heading>
            <Row>
                <LinkButton click={log} buttonType="primary">Primary</LinkButton>
                <LinkButton click={log} buttonType="secondary">Secondary</LinkButton>
                <LinkButton click={log} buttonType="warning">Warning</LinkButton>
                <LinkButton click={log} buttonType="danger">Danger</LinkButton>
                <LinkButton click={log} buttonType="success">Success</LinkButton>
            </Row>
            <Heading level="2">Link Button Sizes</Heading>
            <Row align="end">
                <LinkButton click={log} buttonType="primary" sizeType="sm">Small</LinkButton>
                <LinkButton click={log} buttonType="primary" sizeType="default">Default</LinkButton>
                <LinkButton click={log} buttonType="primary" sizeType="lg">Large</LinkButton>
                <LinkButton click={log} buttonType="primary" sizeType="xl">XLarge</LinkButton>

            </Row>
        </Wrapper>

    );
}
