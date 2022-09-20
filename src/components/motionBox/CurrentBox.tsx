import React, { useState } from "react";
import { ContentContainer, ContentTitle, Circle as StyledCircle } from "../styled/SampleStyled";
import styled from "styled-components";
import { motion } from "framer-motion";

export interface AnimationBoxProps {
    onClickRefresh: (index: number) => void;
    refresh: number[];
}

const Circle = styled(StyledCircle)`
    position: absolute;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
export default function CurrentBox() {
    const [isClick, setIsClick] = useState(false);
    const onClick = () => {
        setIsClick((cur) => !cur);
    };

    return (
        <ContentContainer bgColor="rgb(116, 185, 255)" onClick={onClick}>
            <ContentTitle>Click Box!</ContentTitle>

            {isClick ? (
                <Circle
                    layoutId="circle"
                    transition={{ duration: 1 }}
                    style={{
                        left: "20px",
                    }}
                />
            ) : null}

            {!isClick ? (
                <Circle
                    layoutId="circle"
                    transition={{ duration: 1 }}
                    style={{
                        right: "20px",
                    }}
                />
            ) : null}
        </ContentContainer>
    );
}
