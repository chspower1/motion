import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { render } from "react-dom";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div<{ bgColor?: string }>`
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
const Box = styled(motion.div)`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const Circle = styled(motion.div)`
    z-index: 1000;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    place-self: center;
`;
const myVars1 = {
    start: { scale: 0 },
    end: {
        scale: 1,
        rotateZ: 180,
        transition: { type: "spring", stiffness: 260, damping: 20 },
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
    return (
        <Wrapper>
            <button onClick={() => window.location.reload()}>새로고침</button>
            <Container bgColor="#74b9ff">
                <Box variants={myVars1} initial="start" animate="end" />
            </Container>
            <Container bgColor="#fd79a8">
                <Box variants={myVars2} initial="start" animate="end">
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                    <Circle className="circle" variants={circleVariants} />
                </Box>
            </Container>
        </Wrapper>
    );
}

export default App;
