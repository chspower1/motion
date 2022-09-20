import React from "react";
import { ContentContainer, ContentTitle, RedirectBtn, Box, Circle } from "../styled/SampleStyled";
import { AnimationBoxProps as VariantBoxProps } from "./AnimationBox";
const myVars2 = {
    start: { opacity: 0, scale: 0.5 },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
};
const circleVariants = {
    start: { opacity: 0, y: 10 },
    end: {
        opacity: 1,
        y: 0,
    },
};

export default function VariantBox({ onClickRefresh, refresh }: VariantBoxProps) {
    return (
        <ContentContainer bgColor="rgb(253, 121, 168)">
            <ContentTitle>Variants</ContentTitle>
            <RedirectBtn onClick={() => onClickRefresh(1)}>
                <svg
                    width={"100%"}
                    height={"100%"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill={"white"}
                >
                    <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
                </svg>
            </RedirectBtn>
            <Box variants={myVars2} initial="start" animate="end" key={refresh[1]}>
                <Circle className="circle" variants={circleVariants} />
                <Circle className="circle" variants={circleVariants} />
                <Circle className="circle" variants={circleVariants} />
                <Circle className="circle" variants={circleVariants} />
            </Box>
        </ContentContainer>
    );
}
