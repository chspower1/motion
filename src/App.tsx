import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { render } from "react-dom";

// Styled - Components
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`;
const Container = styled(motion.div)<{ bgColor?: string }>`
    position: relative;
    background: linear-gradient(140deg, rgb(252, 252, 252), ${(props) => props.bgColor});
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    .circle {
        background-color: ${(props) => props.bgColor};
    }
`;
const Title = styled.h1`
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
    const boxRotate = useTransform(x, [-100, 100], [-360, 360]);
    const boxBgColor = useTransform(
        x,
        [-100, 0, 100],
        ["rgb(47, 73, 185)", "rgb(255, 118, 117)", "rgb(23, 151, 123)"]
    );
    const { scrollYProgress } = useScroll();
    const ScrollScale = useTransform(scrollYProgress, [0, 1], [0.1, 2]);
    useEffect(() => {
        scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
    }, []);
    return (
        <Wrapper>
            <button style={{ position: "absolute" }} onClick={() => window.location.reload()}>
                새로고침
            </button>
            <Container bgColor="rgb(116, 185, 255)">
                <Title>Animation</Title>
                <Box variants={myVars1} initial="start" animate="end" />
            </Container>
            <Container bgColor="rgb(253, 121, 168)">
                <Title>Variants</Title>
                <Box variants={myVars2} initial="start" animate="end">
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                </Box>
            </Container>
            <Container bgColor="rgb(0, 184, 148)">
                <Title>Gestures</Title>
                <Box variants={myVars1} whileHover="hover" whileTap="tap" />
            </Container>
            <Container bgColor="rgb(255, 118, 117)">
                <Title>Drag</Title>
                <Box variants={myVars1} isDrag={true} ref={constranisRef}>
                    {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
                    <DragBox
                        drag
                        dragElastic={0.1}
                        dragConstraints={constranisRef}
                        whileDrag={{ backgroundColor: "rgb(250, 177, 160)" }}
                    />
                </Box>
            </Container>
            <Container bgColor="rgb(255, 118, 117)" ref={scrollRef}>
                <Title>Drag2</Title>

                <DragBox
                    style={{ x, rotateZ: boxRotate, backgroundColor: boxBgColor }}
                    drag
                    dragElastic={0.1}
                    dragSnapToOrigin
                    dragConstraints={scrollRef}
                />
            </Container>
            <Container bgColor="rgb(116, 185, 255)">
                <Title>Scroll</Title>
                <Box style={{ scale: ScrollScale }} />
            </Container>
            <Container bgColor="rgb(116, 185, 255)">
                <Title>Path</Title>
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
            </Container>
        </Wrapper>
    );
}

export default App;
