import React, { useState } from "react";
import { ContentContainer, ContentTitle, Box, NextBtn } from "../styled/SampleStyled";
import { AnimatePresence } from "framer-motion";
import { SlideNumber, PrevBtn } from "../styled/SampleStyled";
const slideVar = {
    exit: (next: boolean) => {
        console.log("exit", next);
        return {
            x: next ? -100 : 100,
            scale: 0,
            transition: {
                duration: 1,
            },
        };
    },
    entry: (next: boolean) => {
        console.log("entry", next);
        return {
            x: next ? 100 : -100,
            scale: 0,
        };
    },
    center: {
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};
export default function SlideBox() {
    const [showing, setShowing] = useState(0);
    const [next, setNext] = useState<boolean>(true);
    const onClickArrowBtn = (next: boolean) => {
        setNext(next);
        setShowing((cur) => (next ? cur + 1 : cur - 1));
        console.log("Click! and nextState:", next);
    };
    return (
        <ContentContainer bgColor="rgb(250, 177, 160)">
            <ContentTitle>Slide</ContentTitle>
            <AnimatePresence custom={next}>
                <Box
                    custom={next}
                    style={{ position: "absolute" }}
                    variants={slideVar}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={showing}
                >
                    <SlideNumber>{showing}</SlideNumber>
                </Box>
            </AnimatePresence>
            <NextBtn onClick={() => onClickArrowBtn(true)}>
                <svg
                    width={"100%"}
                    height={"100%"}
                    fill={"white"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
            </NextBtn>
            <PrevBtn onClick={() => onClickArrowBtn(false)}>
                <svg
                    width={"100%"}
                    height={"100%"}
                    fill={"white"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
            </PrevBtn>
        </ContentContainer>
    );
}
