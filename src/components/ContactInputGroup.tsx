import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    max-width: 563px;
    border: 1px solid black;
`

const Span = styled.span`
    margin-bottom: 1rem;

    height: 58px;

    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 130%;

    color: #3E3E3E;
`

const Input = styled.input`
    margin-top: 1rem;
    padding: 2rem;

    width: 100%;
    height: 93px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;

    color: #2D2D2D;

    ::placeholder {
        font-family: Apercu Arabic Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;

        color: #2D2D2D;
    }
`

const TextArea = styled.textarea`
    margin-top: 1rem;
    padding: 2rem;

    width: 100%;
    height: 189px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;

    color: #2D2D2D;

    resize: none;

    ::placeholder {
        font-family: Apercu Arabic Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;

        position: relative;
        top: -9px;

        color: #2D2D2D;
    }
`

const Button = styled.button`
    margin-top: 1rem;

    width: 218px;
    height: 73px;

    background: #FAD34F;
    border-radius: 500px;

    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;

    color: #FFFFFF;;
`


export const ContactInputGroup: React.FC<{}> = ({ }) => {


    return (
        <>
            <Div>
                <Span>Reach out to us!</Span>
                <Input placeholder="Your name*" />
                <Input placeholder="Your email*" />
                <TextArea placeholder="Your message*"/>
                <Button>Send message</Button>
            </Div>
        </>
    )
}
