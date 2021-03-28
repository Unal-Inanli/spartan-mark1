import React, { FunctionComponent } from "react";
import Heading from "../Heading/Heading";
import Row from "../Layout/Row/Row";

interface SectionHeaderProps {
    sectionTitle: String
}
const SectionHeader: FunctionComponent<SectionHeaderProps> = ({ children, sectionTitle }) => {
    return (
        <div className="border-b-2 py-4 border-gray-400">
            <Row align="center" justify="between">
                <Heading level="1">{sectionTitle}</Heading>
                <Row>
                    {children}

                </Row>
            </Row>
        </div>
    );
}


export default SectionHeader;