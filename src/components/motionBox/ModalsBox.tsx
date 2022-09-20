import React from "react";
import styled from "styled-components";
import { Box, SampleContainer } from "../styled/SampleStyled";
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
export default function ModalsBox() {
    return (
        <ModalContainer>
            <ModalBox></ModalBox>
            <ModalBox></ModalBox>
            <ModalBox></ModalBox>
            <ModalBox></ModalBox>
        </ModalContainer>
    );
}
