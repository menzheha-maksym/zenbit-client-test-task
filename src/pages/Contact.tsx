import React from "react";
import styled from "styled-components";
import { ContactInputGroup } from "../components/ContactInputGroup";
import { Footer } from "../components/Footer";

const StyledContactInputGroup = styled(ContactInputGroup)`


`

const Contact: React.FC<{}> = ({ }) => {


    return (
        <>
            <StyledContactInputGroup />
            {/* <ContactInputGroup /> */}
            <Footer/>
        </>
    )
}

export default Contact;