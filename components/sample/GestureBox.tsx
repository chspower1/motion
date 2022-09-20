import React from "react";
import { myVars1 } from "./AnimationBox";
import { ContentContainer, ContentTitle, Box } from "../styled/SampleStyled";
export default function GestureBox() {
    return (
        <ContentContainer bgColor="rgb(0, 184, 148)">
            <ContentTitle>Gestures</ContentTitle>
            <Box variants={myVars1} whileHover="hover" whileTap="tap" />
        </ContentContainer>
    );
}
