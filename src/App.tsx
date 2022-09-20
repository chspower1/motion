import { useTransform, useScroll, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AnimationBox from "./components/motionBox/AnimationBox";
import VariantBox from "./components/motionBox/VariantBox";
import GestureBox from "./components/motionBox/GestureBox";
import { Title, Wrapper, SampleContainer, Box } from "./components/styled/SampleStyled";
import DragBox from "./components/motionBox/DragBox";
import DragBox2 from "./components/motionBox/DragBox2";
import ScrollBox from "./components/motionBox/ScrollBox";
import PathBox from "./components/motionBox/PathBox";
import SlideBox from "./components/motionBox/SlideBox";
import ClickBox from "./components/motionBox/ClickBox";
import styled from "styled-components";
import ModalsBox from "./components/motionBox/ModalsBox";
const ModalContainer = styled(SampleContainer)`
    width: 70%;
    height: 600px;
    background-color: #e9e9e9;
    margin-bottom: 70px;
    border-radius: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    padding: 40px;
    div:first-child,
    div:last-child {
        grid-column: span 3;
    }
    div:nth-child(2),
    div:nth-child(3) {
        grid-column: span 2;
    }
`;
const ModalBox = styled(Box)`
    width: auto;
    height: 100%;
`;
const Overlay = styled(motion.div)`
    z-index: 10000;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function App() {
    const [refresh, setRefresh] = useState([0, 0, 0]);
    const [modalClick, setModalClick] = useState(false);
    const [modalId, setModalId] = useState("");
    const constranisRef = useRef(null);
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const ScrollScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);
    const onClickRefresh = (index: number) => {
        setRefresh((cur) => {
            const result = [...cur];
            result[index] = result[index] + 1;
            return result;
        });
    };
    const onClickModal = (id: string) => {
        setModalClick((cur) => !cur);
        setModalId(id);
    };

    useEffect(() => {}, []);
    return (
        <Wrapper>
            <Title>Motion Sample</Title>
            <SampleContainer>
                {/* Animation */}
                <AnimationBox onClickRefresh={onClickRefresh} refresh={refresh} />
                {/* Variants */}
                <VariantBox onClickRefresh={onClickRefresh} refresh={refresh} />
                {/* Gestures */}
                <GestureBox />
                {/* Drag */}
                <DragBox constranisRef={constranisRef} />
                {/* Drag2 */}
                <DragBox2 scrollRef={scrollRef} />
                {/* Scroll */}
                <ScrollBox ScrollScale={ScrollScale} />
                {/* Path */}
                <PathBox onClickRefresh={onClickRefresh} refresh={refresh} />
                {/* Slide next버튼 클릭 후 prev버튼 누르면 exit가 정상적으로 작동하지 않음(수정요망)*/}
                <SlideBox />
                {/* ClickBox (use layoutId) */}
                <ClickBox />
            </SampleContainer>
            <ModalContainer>
                {["0", "1", "2", "3"].map((item) => (
                    <ModalBox
                        style={{ cursor: "pointer" }}
                        layoutId={item}
                        onClick={() => onClickModal(item)}
                    ></ModalBox>
                ))}
            </ModalContainer>
            <AnimatePresence>
                {modalClick ? (
                    <Overlay
                        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        onClick={() => onClickModal(modalId)}
                    >
                        <ModalBox
                            layoutId={modalId}
                            style={{ width: 1000, height: 500 }}
                        ></ModalBox>
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
