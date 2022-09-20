import React, { useEffect } from "react";
import { ContentContainer, ContentTitle, DragTarget } from "../styled/SampleStyled";
import { useTransform, useMotionValue } from "framer-motion";

export default function DragBox2({ scrollRef }: { scrollRef: React.MutableRefObject<null> }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const boxRotateX = useTransform(x, [-100, 100], [-540, 540]);
    const boxRotateY = useTransform(y, [-100, 100], [-540, 540]);
    const boxBgColor = useTransform(
        y,
        [-100, 0, 100],
        ["rgb(255, 231, 231)", "rgb(255, 118, 117)", "rgb(235, 75, 75)"]
    );
    return (
        <ContentContainer bgColor="rgb(255, 118, 117)" ref={scrollRef}>
            <ContentTitle>Drag2</ContentTitle>
            <DragTarget
                style={{
                    x,
                    y,
                    rotateZ: boxRotateX,
                    backgroundColor: boxBgColor,
                }}
                drag
                dragElastic={0.1}
                dragSnapToOrigin
                dragConstraints={scrollRef}
            />
        </ContentContainer>
    );
}
