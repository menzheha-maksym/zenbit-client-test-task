import React from "react";
import styled from "styled-components";
import { ContactInputGroup } from "../components/ContactInputGroup";
import { Footer } from "../components/Footer";
import BackgroundImage from '../images/image.png'

const Image = styled.img`
    position: absolute;
    right: 0;
`

const StyledContactInputGroupDiv = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
`

const Contact: React.FC<{}> = ({ }) => {


    return (
        <>
            <Image src={BackgroundImage} />
            <StyledContactInputGroupDiv>
                <ContactInputGroup />
            </StyledContactInputGroupDiv >
            <Footer />
        </>
    )
}

export default Contact;