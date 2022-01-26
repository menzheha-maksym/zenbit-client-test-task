import React from "react";
import styled from "styled-components";
import { ContactInputGroup } from "../components/ContactInputGroup";

const StyledContactInputGroup = styled(ContactInputGroup)`


`

const Contact: React.FC<{}> = ({ }) => {


    return (
        <>
            <StyledContactInputGroup />
            {/* <ContactInputGroup /> */}
        </>
    )
}

export default Contact;