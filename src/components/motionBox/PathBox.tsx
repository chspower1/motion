import React from "react";
import { ContentContainer, ContentTitle, RedirectBtn, Svg } from "../styled/SampleStyled";
import { motion } from "framer-motion";
import { AnimationBoxProps as PathBoxProps } from "./AnimationBox";

const pathVar = {
    start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
    end: {
        pathLength: 1,
        fill: "rgba(255,255,255,1)",
    },
};

export default function PathBox({ onClickRefresh, refresh }: PathBoxProps) {
    return (
        <ContentContainer bgColor="rgb(116, 185, 255)">
            <RedirectBtn onClick={() => onClickRefresh(2)}>
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
            <ContentTitle>Path</ContentTitle>
            <Svg viewBox="0 0 576 512" key={refresh[2]}>
                <motion.path
                    variants={pathVar}
                    initial={"start"}
                    animate={"end"}
                    transition={{
                        default: { duration: 2 },
                        fill: { duration: 2, delay: 0.5 },
                    }}
                    stroke="white"
                    strokeWidth="10"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
            </Svg>
        </ContentContainer>
    );
}
