import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;
`;
export const SampleContainer = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const ModalContainer = styled(SampleContainer)``;
export const Title = styled.h1`
    position: relative;
    font-size: 60px;
    font-weight: 800;
    margin: 70px;
    color: #4a5255;
`;
export const RedirectBtn = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: none;
    border: none;
    width: 30px;
    height: 30px;

    cursor: pointer;
`;
export const NextBtn = styled(RedirectBtn)`
    right: 0px;
    bottom: 50%;
    transform: translateY(50%);
`;
export const PrevBtn = styled(NextBtn)`
    left: 0px;
`;
export const ContentContainer = styled(motion.div)<{ bgColor?: string }>`
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
export const ContentTitle = styled.h1`
    color: rgb(255, 255, 255);
    z-index: 1000;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-weight: 800;
`;
export const Box = styled(motion.div)<{ isDrag?: boolean }>`
    position: relative;
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
export const DragTarget = styled(Box)`
    width: 50px;
    height: 50px;
    place-self: center;
    background-color: rgb(255, 118, 117);
`;
export const SlideNumber = styled.div`
    position: absolute;
    font-size: 26px;
    font-weight: 800;
    color: #fab1a0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Circle = styled(motion.div)`
    z-index: 1000;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    place-self: center;
`;

export const Svg = styled.svg`
    width: 100px;
    height: 100px;
`;
