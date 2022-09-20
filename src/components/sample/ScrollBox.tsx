import { MotionValue } from "framer-motion";
import React from "react";
import { ContentContainer, ContentTitle, Box } from "../styled/SampleStyled";

export default function ScrollBox({ ScrollScale }: { ScrollScale: MotionValue<number> }) {
    return (
        <ContentContainer bgColor="rgb(116, 185, 255)">
            <ContentTitle>Scroll</ContentTitle>
            <Box style={{ scale: ScrollScale }} />
        </ContentContainer>
    );
}
