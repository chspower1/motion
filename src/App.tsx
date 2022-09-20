import { useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AnimationBox from "./components/motionBox/AnimationBox";
import VariantBox from "./components/motionBox/VariantBox";
import GestureBox from "./components/motionBox/GestureBox";
import { Title, Wrapper, SampleContainer } from "./components/styled/SampleStyled";
import DragBox from "./components/motionBox/DragBox";
import DragBox2 from "./components/motionBox/DragBox2";
import ScrollBox from "./components/motionBox/ScrollBox";
import PathBox from "./components/motionBox/PathBox";
import SlideBox from "./components/motionBox/SlideBox";
import CurrentBox from "./components/motionBox/CurrentBox";

function App() {
    const [refresh, setRefresh] = useState([0, 0, 0]);
    const constranisRef = useRef(null);
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const ScrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const onClickRefresh = (index: number) => {
        setRefresh((cur) => {
            const result = [...cur];
            result[index] = result[index] + 1;
            return result;
        });
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
                <CurrentBox />
            </SampleContainer>
        </Wrapper>
    );
}

export default App;
