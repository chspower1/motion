import styled from "styled-components";
import { motion } from "framer-motion";
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
const Container = styled.div<{ bgColor?: string }>`
    position: relative;
    background: linear-gradient(140deg, #fcfcfc, ${(props) => props.bgColor});
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
    color: white;
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
    background-color: white;
    overflow: hidden;
    display: ${(props) => (props.isDrag ? "flex" : "grid")};
    justify-content: center;
    grid-template-columns: ${(props) => (props.isDrag ? "none" : "repeat(2, 1fr)")};
`;
const DragBox = styled(Box)`
    width: 50px;
    height: 50px;
    place-self: center;
    background-color: #00b894;
`;
const Circle = styled(motion.div)`
    z-index: 1000;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    place-self: center;
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

function App() {
    const constranisRef = useRef(null);
    return (
        <Wrapper>
            <button style={{ position: "absolute" }} onClick={() => window.location.reload()}>
                새로고침
            </button>
            <Container bgColor="#74b9ff">
                <Title>Animation</Title>
                <Box variants={myVars1} initial="start" animate="end" />
            </Container>
            <Container bgColor="#fd79a8">
                <Title>Variants</Title>
                <Box variants={myVars2} initial="start" animate="end">
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                </Box>
            </Container>
            <Container bgColor="#00b894">
                <Title>Gestures</Title>
                <Box variants={myVars1} whileHover="hover" whileTap="tap" />
            </Container>
            <Container bgColor="#00b894">
                <Title>Drag</Title>
                <Box variants={myVars1} isDrag={true} ref={constranisRef}>
                    {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
                    <DragBox
                        drag
                        dragConstraints={constranisRef}
                        whileDrag={{ backgroundColor: "rgb(85, 239, 196)" }}
                    />
                </Box>
            </Container>
        </Wrapper>
    );
}

export default App;
