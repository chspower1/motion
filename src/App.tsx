import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { render } from "react-dom";

// Styled - Components
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;
`;
const Container = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    position: relative;
    font-size: 60px;
    font-weight: 800;
    margin: 70px;
    color: #4a5255;
`;
const RedirectBtn = styled.button`
    position: absolute;
    top: 0px;
    right: 250px;
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
const ContentContainer = styled(motion.div)<{ bgColor?: string }>`
    position: relative;
    background: linear-gradient(140deg, rgb(252, 252, 252), ${(props) => props.bgColor});
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px;
    border-radius: 20px;
    .circle {
        background-color: ${(props) => props.bgColor};
    }
`;
const ContentTitle = styled.h1`
    color: rgb(255, 255, 255);
    z-index: 1000;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-weight: 800;
`;
const Box = styled(motion.div)<{ isDrag?: boolean }>`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    display: ${(props) => (props.isDrag ? "flex" : "grid")};
    justify-content: center;
    grid-template-columns: ${(props) => (props.isDrag ? "none" : "repeat(2, 1fr)")};
`;
const DragBox = styled(Box)`
    width: 50px;
    height: 50px;
    place-self: center;
    background-color: rgb(255, 118, 117);
`;
const Circle = styled(motion.div)`
    z-index: 1000;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    place-self: center;
`;

const Svg = styled.svg`
    width: 100px;
    height: 100px;
`;
// Variants
const myVars1 = {
    start: { scale: 0 },
    end: {
        scale: 1,
        rotateZ: 180,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
        scale: 1.1,
        rotateZ: 90,
    },
    tap: {
        scale: 0.7,
        borderRadius: "50px",
    },
};
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
const pathVar = {
    start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
    end: {
        pathLength: 1,
        fill: "rgba(255,255,255,1)",
    },
};

function App() {
    const constranisRef = useRef(null);
    const scrollRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const boxRotateX = useTransform(x, [-100, 100], [-540, 540]);
    const boxRotateY = useTransform(y, [-100, 100], [-540, 540]);
    const boxBgColor = useTransform(
        x,
        [-100, 0, 100],
        ["rgb(116, 185, 255)", "rgb(255, 118, 117)", "rgb(162, 155, 254)"]
    );
    const { scrollYProgress } = useScroll();
    const ScrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    useEffect(() => {
        // x.onChange(() => console.log(x.get()));
        y.onChange(() => console.log(y.get()));
    }, []);
    return (
        <Wrapper>
            <Title>Motion Sample</Title>

            <Container>
                <RedirectBtn
                    style={{ position: "absolute" }}
                    onClick={() => window.location.reload()}
                >
                    <svg
                        width={"100%"}
                        height={"100%"}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
                    </svg>
                </RedirectBtn>
                {/* Animation */}
                <ContentContainer bgColor="rgb(116, 185, 255)">
                    <ContentTitle>Animation</ContentTitle>
                    <Box variants={myVars1} initial="start" animate="end" />
                </ContentContainer>
                {/* Variants */}
                <ContentContainer bgColor="rgb(253, 121, 168)">
                    <ContentTitle>Variants</ContentTitle>
                    <Box variants={myVars2} initial="start" animate="end">
                        <Circle className="circle" variants={circleVariants} />
                        <Circle className="circle" variants={circleVariants} />
                        <Circle className="circle" variants={circleVariants} />
                        <Circle className="circle" variants={circleVariants} />
                    </Box>
                </ContentContainer>
                {/* Gestures */}
                <ContentContainer bgColor="rgb(0, 184, 148)">
                    <ContentTitle>Gestures</ContentTitle>
                    <Box variants={myVars1} whileHover="hover" whileTap="tap" />
                </ContentContainer>
                {/* Drag */}
                <ContentContainer bgColor="rgb(255, 118, 117)">
                    <ContentTitle>Drag</ContentTitle>
                    <Box variants={myVars1} isDrag={true} ref={constranisRef}>
                        {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
                        <DragBox
                            drag
                            dragElastic={0.1}
                            dragConstraints={constranisRef}
                            whileDrag={{ backgroundColor: "rgb(250, 177, 160)" }}
                        />
                    </Box>
                </ContentContainer>
                {/* Drag2 */}
                <ContentContainer bgColor="rgb(255, 118, 117)" ref={scrollRef}>
                    <ContentTitle>Drag2</ContentTitle>

                    <DragBox
                        style={{
                            x,
                            y,
                            rotateY: boxRotateX,
                            rotateX: boxRotateY,
                            backgroundColor: boxBgColor,
                        }}
                        drag
                        dragElastic={0.1}
                        dragSnapToOrigin
                        dragConstraints={scrollRef}
                    />
                </ContentContainer>
                {/* Scroll */}
                <ContentContainer bgColor="rgb(116, 185, 255)">
                    <ContentTitle>Scroll</ContentTitle>
                    <Box style={{ scale: ScrollScale }} />
                </ContentContainer>
                {/* Path */}
                <ContentContainer bgColor="rgb(116, 185, 255)">
                    <ContentTitle>Path</ContentTitle>
                    <Svg viewBox="0 0 576 512">
                        <motion.path
                            variants={pathVar}
                            initial={"start"}
                            animate={"end"}
                            transition={{
                                default: { duration: 3 },
                                fill: { duration: 2, delay: 1 },
                            }}
                            stroke="white"
                            strokeWidth="10"
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                        />
                    </Svg>
                </ContentContainer>
            </Container>
        </Wrapper>
    );
}

export default App;
