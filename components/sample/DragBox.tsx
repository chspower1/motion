import React from "react";
import { ContentContainer, ContentTitle, Box, DragTarget } from "../styled/SampleStyled";
import { myVars1 } from "./AnimationBox";

export default function DragBox({
    constranisRef,
}: {
    constranisRef: React.MutableRefObject<null>;
}) {
    return (
        <ContentContainer bgColor="rgb(255, 118, 117)">
            <ContentTitle>Drag</ContentTitle>
            <Box variants={myVars1} isDrag={true} ref={constranisRef}>
                {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
                <DragTarget
                    drag
                    dragElastic={0.1}
                    dragConstraints={constranisRef}
                    whileDrag={{ backgroundColor: "rgb(250, 177, 160)" }}
                />
            </Box>
        </ContentContainer>
    );
}
